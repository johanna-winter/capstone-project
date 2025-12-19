import dbConnect from "@/db/connect";
import Event from "@/db/models/Event";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "POST") {
    try {
      const eventData = request.body;
      if (!eventData.title || eventData.title.trim() === "") {
        return response.status(400).json({ error: "Event title is required" });
      }
      eventData.title = eventData.title.trim();
      const createdEvent = await Event.create(eventData);
      return response
        .status(201)
        .json({ status: "Event successfully created!", id: createdEvent._id });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
  if (request.method === "GET") {
    try {
      const events = await Event.find();
      return response.status(200).json(events);
    } catch (error) {
      console.error("GET /events error: ", error);
      return response.status(500).json({ error: error.message });
    }
  }
  return response.status(405).json({ status: "Method not allowed" });
}
