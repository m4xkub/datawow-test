"use client";
import { useEffect, useState } from "react";
import Concert from "./concert";
import GetConcerts from "../api/getConcerts";
import { FaTrash, FaUser } from "react-icons/fa";
import { ConcertInterface } from "../interface/concertInterface";
import DeleteConcertById from "../api/deleteConcertById";

export default function ConcertList() {
  const [concerts, setConcerts] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);
  useEffect(() => {
    const fetchConcerts = async () => {
      const { result } = await GetConcerts();
      console.log(result);
      setConcerts(result);
    };

    fetchConcerts();
  }, [refreshKey]);
  return (
    <div className="space-y-12 mb-4">
      {concerts.map((concert: ConcertInterface, index) => (
        <div
          className=" mx-10 space-y-4 bg-white rounded-lg border border-gray-400 p-8"
          key={index}
        >
          <p className="text-3xl font-bold text-blue-400"> {concert.name}</p>
          <hr />
          <p>{concert.description}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-700">
              <FaUser />
              <span>{concert.seats}</span>
            </div>

            <button
              className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              onClick={async () => {
                await DeleteConcertById(concert.id);
                setRefreshKey(refreshKey + 1);
              }}
            >
              <FaTrash />
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
function handleDelete(arg0: () => any) {
  throw new Error("Function not implemented.");
}
