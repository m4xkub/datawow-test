export default async function GetTotalSeats() {
  const backendUri = process.env.NEXT_PUBLIC_BACKEND_URI;
  console.log("url", backendUri);
  if (!backendUri) {
    throw new Error("BACKEND_URI is not defined");
  }
  const token = localStorage.getItem("token");

  const res = await fetch(backendUri + "/concert/totalseats", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.message || "Retrieving Total Seats Failed");
  }

  const { result } = await res.json();

  return { result };
}
