import { FaUser, FaMedal, FaTimesCircle } from "react-icons/fa";

export default function StatComponent() {
  const cards = [
    {
      title: "Total of seats",
      value: 500,
      icon: <FaUser size={30} />,
      bg: "bg-sky-800",
    },
    {
      title: "Reserve",
      value: 120,
      icon: <FaMedal size={30} />,
      bg: "bg-teal-600",
    },
    {
      title: "Cancel",
      value: 12,
      icon: <FaTimesCircle size={30} />,
      bg: "bg-red-400",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {cards.map((card) => (
        <div
          key={card.title}
          className={`${card.bg} text-white rounded-lg px-20 py-12 text-center space-y-4`}
        >
          <div>
            <div className="flex justify-center">{card.icon}</div>
            <div className="text-lg">{card.title}</div>
          </div>

          <div className="text-3xl font-bold">{card.value}</div>
        </div>
      ))}
    </div>
  );
}
