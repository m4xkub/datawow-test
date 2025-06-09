"use client";
import { useState } from "react";
import { FaSave, FaUser } from "react-icons/fa";
import CreateConcert from "../api/createConcert";
import ErrorModal from "./errorModal";

export default function CreateConcertForm() {
  const [concertName, setConcertName] = useState("");
  const [seats, setSeats] = useState(500);
  const [description, setDescription] = useState("");
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [error, setError] = useState("");

  return (
    <form className="h-[90%] max-h-[478px] bg-white border border-gray-400 rounded-lg p-8 space-y-6 overflow-scroll">
      <p className="text-4xl font-bold text-blue-400">Create</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-semibold text-lg mb-2">
            Concert Name
          </label>
          <input
            type="text"
            placeholder="Please input concert name"
            className="w-full border border-gray-300 rounded px-4 py-2"
            onChange={(e) => setConcertName(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-semibold text-lg mb-2">
            Total of seat
          </label>
          <div className="relative">
            <input
              type="number"
              defaultValue="500"
              className="w-full border border-gray-300 rounded px-4 py-2 pr-10"
              onChange={(e) => setSeats(Number(e.target.value))}
            />
            <FaUser className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>
      </div>

      <div>
        <label className="block font-semibold text-lg mb-2">Description</label>
        <textarea
          placeholder="Please input description"
          className="w-full border border-gray-300 rounded px-4 py-2 h-28"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="flex items-center gap-2 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          onClick={async (e) => {
            e.preventDefault();
            try {
              if (concertName && seats && description) {
                await CreateConcert(concertName, description, seats);
                window.location.reload();
              }
            } catch (err: any) {
              setError(err.message);
              setErrorModalOpen(true);
              console.log(e);
            }
          }}
        >
          <FaSave />
          Save
        </button>
      </div>

      {errorModalOpen && error && (
        <ErrorModal
          errorMessage={error}
          onClose={() => {
            setErrorModalOpen(false);
            setError("");
          }}
        />
      )}
    </form>
  );
}
