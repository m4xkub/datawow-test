"use client";
import { useEffect, useState } from "react";
import GetConcerts from "../api/getConcerts";
import { FaTrash, FaUser } from "react-icons/fa";
import DeleteConcertById from "../api/deleteConcertById";
import IsReserved from "../api/isReserved";
import ReserveSeat from "../api/reserve";
import CancelSeat from "../api/cancel";
import CreateHistory from "../api/createHistory";
import { UserAction } from "../config/UserAction";
import ConfirmDeleteModal from "./confirmDeletionModal";
import ErrorModal from "./errorModal";
import { ConcertInterface } from "../interface/ConcertInterface";

export default function ConcertList() {
  const [concerts, setConcerts] = useState<ConcertInterface[]>([]);
  const [refreshKey, setRefreshKey] = useState(0);
  const [role, setRole] = useState("");
  const [reservedMap, setReservedMap] = useState<Record<string, boolean>>({});
  const [targetConcert, setTargetConcert] = useState<ConcertInterface | null>(
    null
  );
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchConcertsAndReservations = async () => {
      const { result } = await GetConcerts();
      setConcerts(result);

      const roleFromLocalStorage = localStorage.getItem("role");
      if (roleFromLocalStorage) {
        setRole(roleFromLocalStorage);
      }
      if (roleFromLocalStorage === "USER") {
        const map: Record<string, boolean> = {};
        await Promise.all(
          result.map(async (concert: ConcertInterface) => {
            const { result: isReserved } = await IsReserved(concert.id);
            map[concert.id] = isReserved;
          })
        );
        setReservedMap(map);
      }
    };

    fetchConcertsAndReservations();
  }, [refreshKey]);

  const handleDeleteClick = (concert: ConcertInterface) => {
    setTargetConcert(concert);
    setConfirmModalOpen(true);
  };

  const confirmDelete = async () => {
    if (targetConcert) {
      await DeleteConcertById(targetConcert.id);
      setRefreshKey((prev) => prev + 1);
      console.log("Deleting", targetConcert.id);
    }
    setConfirmModalOpen(false);
  };

  return (
    <div className="space-y-12 mb-4">
      {concerts.map((concert) => (
        <div
          className="mx-10 space-y-4 bg-white rounded-lg border border-gray-400 p-8"
          key={concert.id}
        >
          <p className="text-3xl font-bold text-blue-400">{concert.name}</p>
          <hr />
          <p>{concert.description}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-700">
              <FaUser />
              <span>{concert.seats}</span>
            </div>

            {role === "ADMIN" ? (
              <button
                className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={async () => {
                  handleDeleteClick(concert);
                }}
              >
                <FaTrash />
                Delete
              </button>
            ) : role === "USER" && !reservedMap[concert.id] ? (
              <button
                className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={async () => {
                  try {
                    console.log("Reserve concert", concert.id);

                    await ReserveSeat(concert.id);
                    await CreateHistory(concert.name, UserAction.RESERVED);

                    setRefreshKey((prev) => prev + 1);
                  } catch (err: any) {
                    console.error(
                      "Error occurred during reservation:",
                      err.message
                    );
                    setError(err.message);
                    setErrorModalOpen(true);
                  }
                }}
              >
                🎟️ Reserve
              </button>
            ) : role === "USER" && reservedMap[concert.id] ? (
              <button
                className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={async () => {
                  try {
                    console.log("Cancel reservation", concert.id);
                    await CancelSeat(concert.id);
                    await CreateHistory(concert.name, UserAction.CANCELED);
                    setRefreshKey(refreshKey + 1);
                  } catch (err: any) {
                    console.error(
                      "Error occurred during reservation:",
                      err.message
                    );
                    setError(err.message);
                    setErrorModalOpen(true);
                  }
                }}
              >
                ❌ Cancel
              </button>
            ) : null}
          </div>
        </div>
      ))}

      {confirmModalOpen && targetConcert && (
        <ConfirmDeleteModal
          concertName={targetConcert.name}
          onCancel={() => setConfirmModalOpen(false)}
          onConfirm={confirmDelete}
        />
      )}
      {errorModalOpen && error && (
        <ErrorModal
          errorMessage={error}
          onClose={() => {
            setErrorModalOpen(false);
            setError("");
          }}
        />
      )}
    </div>
  );
}
