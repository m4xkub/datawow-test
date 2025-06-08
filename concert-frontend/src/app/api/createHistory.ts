import { UserAction } from "../config/userAction";

export default async function CreateHistory(
  concertName: string,
  action: UserAction
) {
  const backendUri = process.env.NEXT_PUBLIC_BACKEND_URI;
  if (!backendUri) {
    throw new Error("BACKEND_URI is not defined");
  }
  const token = localStorage.getItem("token");

  const res = await fetch(backendUri + "/history/create", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ concertName, action }),
  });

  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.message);
  }

  const { message, result } = await res.json();

  return { message, result };
}
