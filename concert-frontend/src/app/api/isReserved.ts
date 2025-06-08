export default async function IsReserved(concertId: string) {
  const backendUri = process.env.NEXT_PUBLIC_BACKEND_URI;
  if (!backendUri) {
    throw new Error("BACKEND_URI is not defined");
  }
  const token = localStorage.getItem("token");

  const res = await fetch(backendUri + "/concert/isReserved", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ concertId }),
  });

  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.message);
  }

  const { result } = await res.json();

  return { result };
}
