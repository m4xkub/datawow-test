"use client";
import { useEffect, useState } from "react";
import GetConcerts from "../api/getConcerts";
import { FaTrash, FaUser } from "react-icons/fa";
import { ConcertInterface } from "../interface/concertInterface";
import DeleteConcertById from "../api/deleteConcertById";
import IsReserved from "../api/isReserved";
import ReserveSeat from "../api/reserve";
import CancelSeat from "../api/cancel";
import CreateHistory from "../api/createHistory";
import { UserAction } from "../config/userAction";

export default function ConcertList() {
  const [concerts, setConcerts] = useState<ConcertInterface[]>([]);
  const [refreshKey, setRefreshKey] = useState(0);
  const [role, setRole] = useState("");
  const [reservedMap, setReservedMap] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const fetchConcertsAndReservations = async () => {
      const { result } = await GetConcerts();
      setConcerts(result);

      const roleFromLocalStorage = localStorage.getItem("role");
      if (roleFromLocalStorage) {
        setRole(roleFromLocalStorage);
      }

      // For USER role: fetch reservation status per concert
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
                  await DeleteConcertById(concert.id);
                  setRefreshKey((prev) => prev + 1);
                }}
              >
                <FaTrash />
                Delete
              </button>
            ) : role === "USER" && !reservedMap[concert.id] ? (
              <button
                className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={async () => {
                  console.log("Reserve concert", concert.id);
                  await ReserveSeat(concert.id);
                  await CreateHistory(concert.name, UserAction.RESERVED);
                  await setRefreshKey(refreshKey + 1);
                }}
              >
                🎟️ Reserve
              </button>
            ) : role === "USER" && reservedMap[concert.id] ? (
              <button
                className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={async () => {
                  console.log("Cancel reservation", concert.id);
                  await CancelSeat(concert.id);
                  await CreateHistory(concert.name, UserAction.CANCELED);
                  setRefreshKey(refreshKey + 1);
                }}
              >
                ❌ Cancel
              </button>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}
