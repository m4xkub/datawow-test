import React from "react";
import UserNavBar from "../components/userNavBar";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-w-screen min-h-screen">
      <UserNavBar />
      {children}
    </div>
  );
}
