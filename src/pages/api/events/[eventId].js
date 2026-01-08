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
  if (request.method === "PUT") {
    const { title, description, date } = request.body;
    if (!title || title.trim() === "") {
      return response.status(400).json({ error: "Event title is required" });
    }
    try {
      const event = await Event.findById(eventId);

      if (!event) {
        return response.status(404).json({ error: "Event not found" });
      }

      event.title = title.trim();
      event.description = description ?? "";
      event.date = date || null;

      await event.save();
      return response.status(200).json(event);
    } catch (error) {
      console.error("PUT /api/events/[eventId] error:", error);
      return response.status(500).json({
        error: "Event update failed.",
        message: error.message,
      });
    }
  }
  if (request.method === "DELETE") {
    await Event.findByIdAndDelete(eventId);
    response
      .status(200)
      .json({ status: `Event with ${eventId} successfully deleted.` });
  }
  return response.status(405).json({ error: "Method not allowed" });
}
