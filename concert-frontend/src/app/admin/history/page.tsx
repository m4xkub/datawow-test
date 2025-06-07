"use client";
import GetHistories from "@/app/api/getHistories";
import { HistoryInterface } from "@/app/interface/historyInterface";
import { useEffect, useState } from "react";

export default function Page() {
  const [histories, setHistories] = useState([]);
  useEffect(() => {
    const fetchHistories = async () => {
      const { result } = await GetHistories();
      console.log(result);
      setHistories(result);
    };

    fetchHistories();
  }, []);
  return (
    <div className="w-full">
      <div className="overflow-x-auto overflow-y-auto m-8">
        <table className="min-w-full max-h-screen border border-gray-300 text-left">
          <thead className="bg-white">
            <tr>
              <th className="px-4 py-2 border border-gray-300 font-semibold">
                Date time
              </th>
              <th className="px-4 py-2 border border-gray-300 font-semibold">
                Username
              </th>
              <th className="px-4 py-2 border border-gray-300 font-semibold">
                Concert name
              </th>
              <th className="px-4 py-2 border border-gray-300 font-semibold">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {histories.map((history: HistoryInterface, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border border-gray-300">
                  {history.timestamp}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {history.username}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {history.concertName}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {history.action}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
