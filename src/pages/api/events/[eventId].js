import dbConnect from "@/db/connect";
import Event from "@/db/models/Event";

export default async function handler(request, response) {
  await dbConnect();
  const { eventId } = request.query;

  if (request.method === "GET") {
    try {
      const event = await Event.findById(eventId);
      if (!event) {
        return response.status(404).json({ error: "Event not found" });
      }
      return response.status(200).json(event);
    } catch (error) {
      console.error("GET /api/events/[eventId] error:", error);
      return response.status(400).json({ error: error.message });
    }
  }
  return response.status(405).json({ error: "Method not allowed" });
}
