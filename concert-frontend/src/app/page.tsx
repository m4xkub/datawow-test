"use client";

import { useState } from "react";
import { Role } from "./config/Role";
import { Register } from "./api/register";
import { redirect } from "next/navigation";

export default function RegisterPage() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    role: Role.USER,
  });

  const [error, setError] = useState("");
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    console.log("Registering:", form);

    const { role } = await Register({
      username: form.username,
      password: form.password,
      userRole: form.role,
    });

    if (role === Role.ADMIN) {
      redirect("/admin");
    } else if (role === Role.USER) {
      redirect("/user");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold text-center mb-6">Register</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-full border px-4 py-2 rounded"
            value={form.username}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border px-4 py-2 rounded"
            value={form.password}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full border px-4 py-2 rounded"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />

          <select
            name="role"
            className="w-full border px-4 py-2 rounded"
            value={form.role}
            onChange={handleChange}
            required
          >
            <option value={Role.USER}>User</option>
            <option value={Role.ADMIN}>Admin</option>
          </select>

          {error !== "" && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Register
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
