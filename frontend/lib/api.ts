export async function sendLead(data: {
  name?: string;
  email: string;
  source?: string;
  product?: string;
}) {
  const res = await fetch("http://localhost:8000/leads", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Falha ao enviar lead");
  }

  return res.json();
}
