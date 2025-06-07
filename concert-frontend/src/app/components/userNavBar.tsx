"use client";
import { redirect } from "next/navigation";
import { FaSignOutAlt } from "react-icons/fa";

export default function UserNavBar() {
  function handleLogout() {
    localStorage.setItem("token", "");
    localStorage.setItem("role", "");
  }
  return (
    <nav className="sm:w-[15%] w-[30%] min-h-screen bg-white flex flex-col">
      <div className="bg-white text-black font-bold text-3xl py-6 px-4 mt-8 max-sm:hidden">
        User
      </div>
      <div className="flex-grow" />
      <button
        className="flex items-center gap-2 bg-white text-black py-4 px-4 mx-2 mb-8 rounded overflow-hidden max-sm:m-0"
        onClick={() => {
          handleLogout();
          redirect("/login");
        }}
      >
        <FaSignOutAlt />
        <span>Logout</span>
      </button>
    </nav>
  );
}
