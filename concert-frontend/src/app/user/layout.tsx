import React from "react";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav>
        {/* your user navbar here */}
        <h1>User Navbar</h1>
      </nav>
      <main>{children}</main>
    </div>
  );
}
