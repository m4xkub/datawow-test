export default async function DeleteConcertById(id: string) {
  const backendUri = process.env.NEXT_PUBLIC_BACKEND_URI;
  console.log("url", backendUri);
  if (!backendUri) {
    throw new Error("BACKEND_URI is not defined");
  }
  const token = localStorage.getItem("token");

  const res = await fetch(backendUri + "/concert/delete/" + id, {
    method: "DELETE",
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
