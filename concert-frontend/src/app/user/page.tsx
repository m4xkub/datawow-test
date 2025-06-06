"use client";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
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

  return <div>hello world</div>;
}
