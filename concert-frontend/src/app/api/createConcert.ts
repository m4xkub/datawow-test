export default async function CreateConcert(
  name: string,
  description: string,
  seats: number
) {
  const backendUri = process.env.NEXT_PUBLIC_BACKEND_URI;

  if (!backendUri) {
    throw new Error("BACKEND_URI is not defined");
  }

  const token = localStorage.getItem("token");
  const res = await fetch(backendUri + "/concert/create", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, description, seats }),
  });

  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.message || "Create Concert failed");
  }

  const { message, result } = await res.json();

  console.log(message);
  console.log(result);
}
