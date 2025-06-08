"use client";

export async function login({
  username,
  password,
}: {
  username: string;
  password: string;
}): Promise<{ token: string; role: string }> {
  const backendUri = process.env.NEXT_PUBLIC_BACKEND_URI;

  if (!backendUri) {
    throw new Error("BACKEND_URI is not defined");
  }
  const res = await fetch(backendUri + "/user/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.message || "Login failed");
  }

  const { token, role } = await res.json();

  // Save to localStorage
  localStorage.setItem("token", token);
  localStorage.setItem("role", role);

  return { token, role };
}
