"use client";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { FaSave, FaTrash, FaUser } from "react-icons/fa";
import StatComponent from "../components/statComponent";
import ConcertList from "../components/concertList";
import CreateConcertForm from "../components/createConcertForm";
export default function Page() {
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "ADMIN") {
      redirect("/login");
    } else {
      setIsAuthorized(true);
    }
  }, []);

  return (
    <div className="w-full h-screen bg-gray-300 flex flex-col items-center justify-center px-4">
      <StatComponent />

      <div className="flex space-x-6 mt-5 w-full text-xl">
        <button
          onClick={() => setActiveTab("overview")}
          className={`pb-2 ${
            activeTab === "overview"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500"
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab("create")}
          className={`pb-2 ${
            activeTab === "create"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500"
          }`}
        >
          Create
        </button>
      </div>

      <div className="w-full h-[2000px] overflow-y-auto flex flex-col mt-10">
        {activeTab == "overview" && <ConcertList />}
        {activeTab == "create" && <CreateConcertForm />}
      </div>
    </div>
  );
}
