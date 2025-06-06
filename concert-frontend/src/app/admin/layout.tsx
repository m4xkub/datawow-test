import React from "react";
import AdminNavBar from "../components/adminNavBar";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-w-screen min-h-screen">
      <AdminNavBar />
      {children}
    </div>
  );
}
