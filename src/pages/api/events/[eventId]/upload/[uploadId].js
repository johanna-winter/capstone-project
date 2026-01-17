import cloudinary from "cloudinary";
import dbConnect from "@/db/connect";
import Event from "@/db/models/Event";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(request, response) {
  if (request.method !== "DELETE") {
    return response.status(405).json({ message: "Method not allowed" });
  }

  // Organizer = authenticated user for MVP
  const session = await getServerSession(request, response, authOptions);
  if (!session) {
    return response.status(401).json({ message: "Unauthorized" });
  }

  const { eventId, uploadId } = request.query;

  try {
    await dbConnect();

    const event = await Event.findById(eventId);
    if (!event)
      return response.status(404).json({ message: "Event not found" });

    const upload = event.uploads.id(uploadId);
    if (!upload)
      return response.status(404).json({ message: "Upload not found" });

    // Delete from Cloudinary: imagePublicId is like /events/[eventId]/[filename]
    const cloudinaryResult = await cloudinary.v2.uploader.destroy(
      upload.imagePublicId
    );

    // If Cloudinary can't find it, still remove metadata
    const okStatuses = ["ok", "not found"];
    if (!okStatuses.includes(cloudinaryResult?.result)) {
      return response.status(500).json({ message: "Failed to delete image." });
    }

    // Remove from MongoDB
    upload.deleteOne();
    await event.save();
    return response.status(200).json({ ok: true, uploads: event.uploads });
  } catch (error) {
    console.error(error);
    return response
      .status(500)
      .json({ message: "Something went wrong. Please try again." });
  }
}
