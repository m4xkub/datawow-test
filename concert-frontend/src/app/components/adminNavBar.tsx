"use client";
import { redirect } from "next/navigation";
import { useState } from "react";
import { FaHome, FaSignOutAlt } from "react-icons/fa";
import { FaBoxArchive } from "react-icons/fa6";

export default function AdminNavBar() {
  const [activePage, setActivePage] = useState("Home");

  function handleLogout() {
    localStorage.setItem("token", "");
    localStorage.setItem("role", "");
  }
  return (
    <nav className="sm:w-[15%] w-[30%] min-h-screen bg-white flex flex-col">
      <div className="bg-white text-black font-bold text-3xl py-6 px-4 mt-8 max-sm:hidden">
        Admin
      </div>
      <button
        className={`flex items-center gap-2 text-black py-4 px-4 mx-2 mt-2 rounded overflow-hidden max-sm:m-0 ${
          activePage == "Home" ? "bg-blue-100 font-semibold" : "bg-white"
        }`}
        onClick={() => {
          setActivePage("Home");
          redirect("/admin");
        }}
      >
        <FaHome className="max-md:hidden" />
        <span>Home</span>
      </button>
      <button
        className={`flex items-center gap-2 text-black py-4 px-4 mx-2 mt-2 rounded overflow-hidden max-sm:m-0 ${
          activePage == "History" ? "bg-blue-100 font-semibold" : "bg-white"
        }`}
        onClick={() => {
          setActivePage("History");
          redirect("/admin/history");
        }}
      >
        <FaBoxArchive className="max-md:hidden" />
        <span>History</span>
      </button>
      <div className="flex-grow" />
      <button
        className="flex items-center gap-2 bg-white text-black py-4 px-4 mx-2 mb-8 rounded overflow-hidden max-sm:m-0"
        onClick={() => {
          handleLogout();
          redirect("/login");
        }}
      >
        <FaSignOutAlt className="max-md:hidden" />
        <span>Logout</span>
      </button>
    </nav>
  );
}
