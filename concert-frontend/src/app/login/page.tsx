"use client";

import { useState } from "react";
import { login } from "../api/login";
import { redirect, useRouter } from "next/navigation";

export default function Page() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await login({ username, password });
      setError("");
      console.log("Login Success");
      const role = localStorage.getItem("role");
      console.log(role);

      if (role == "ADMIN") {
        router.push("/admin");
      } else if (role == "USER") {
        router.push("/user");
      } else {
        console.log("Unidentify role");
      }
    } catch (err: any) {
      setError(err.message || "Login failed");
      console.log(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 mx=2.5 rounded shadow-md w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

        <label className="block mb-4">
          <span className="text-gray-700">Username</span>
          <input
            type="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </label>

        <label className="block mb-6">
          <span className="text-gray-700">Password</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </label>

        {error !== "" && (
          <p className="text-red-500 text-sm mb-4 w-full overflow-scroll">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="w-full text-blue-500 text-start"
          onClick={() => redirect("/")}
        >
          Register?
        </button>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
}
