"use client";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ConcertList from "../components/concertList";
export default function Page() {
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "USER") {
      redirect("/login");
    } else {
      setIsAuthorized(true);
    }
  }, []);

  return (
    <div className="w-full h-screen px-4 py-8 bg-gray-300 overflow-hidden">
      <div className="w-full h-full overflow-scroll hide-scrollbar">
        <ConcertList />
      </div>
    </div>
  );
}
