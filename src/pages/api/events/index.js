import dbConnect from "@/db/connect";
import Event from "@/db/models/Event";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "POST") {
    try {
      const eventData = request.body;
      await Event.create(eventData);
      return response
        .status(201)
        .json({ status: "Event successfully created!" });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
  return response.status(405).json({ status: "Method not allowed" });
}
