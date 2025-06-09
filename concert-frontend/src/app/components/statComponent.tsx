"use client";
import { useEffect, useState } from "react";
import { FaUser, FaMedal, FaTimesCircle } from "react-icons/fa";
import GetNumReserve from "../api/getNumReserve";
import GetNumCancel from "../api/getNumCancel";
import GetTotalSeats from "../api/getTotalSeats";

export default function StatComponent() {
  const [reserve, setReserve] = useState(0);
  const [cancel, setCancel] = useState(0);
  const [seats, setSeats] = useState(0);
  const [loading, setLoading] = useState(true);

  const cards = [
    {
      title: "Total of seats",
      value: seats,
      icon: <FaUser size={30} />,
      bg: "bg-sky-800",
    },
    {
      title: "Reserve",
      value: reserve,
      icon: <FaMedal size={30} />,
      bg: "bg-teal-600",
    },
    {
      title: "Cancel",
      value: cancel,
      icon: <FaTimesCircle size={30} />,
      bg: "bg-red-400",
    },
  ];

  useEffect(() => {
    const fetchStat = async () => {
      const NumReserve = await GetNumReserve();
      const NumCancel = await GetNumCancel();
      const totalSeats = await GetTotalSeats();
      setReserve(NumReserve.result);
      setCancel(NumCancel.result);
      setSeats(totalSeats.result);
      setLoading(false);
    };

    fetchStat();
  }, []);

  if (loading) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
      {cards.map((card) => (
        <div
          key={card.title}
          className={`${card.bg} text-white rounded-lg px-6 py-8 md:px-20 md:py-12 text-center flex flex-col items-center justify-center w-full`}
        >
          <div className="flex justify-center mb-2">{card.icon}</div>
          <div className="text-sm sm:text-lg">{card.title}</div>
          <div className="text-xl sm:text-3xl sm:font-bold mt-2">
            {card.value}
          </div>
        </div>
      ))}
    </div>
  );
}
