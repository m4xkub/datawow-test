export default async function GetConcerts() {
  const backendUri = process.env.NEXT_PUBLIC_BACKEND_URI;
  if (!backendUri) {
    throw new Error("BACKEND_URI is not defined");
  }
  const token = localStorage.getItem("token");

  const res = await fetch(backendUri + "/concert", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.message || "Retrieving Concerts Failed");
  }

  const { message, result } = await res.json();

  return { message, result };
}
