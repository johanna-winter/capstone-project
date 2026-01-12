import formidable from "formidable";
import cloudinary from "cloudinary";
import dbConnect from "@/db/connect";
import Event from "@/db/models/Event";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(request, response) {
  if (request.method !== "POST") {
    return response.status(405).json({ message: "Method not allowed" });
  }
  try {
    const form = formidable({});
    const [fields, files] = await form.parse(request);

    const uploadedFiles = files.images;

    if (!uploadedFiles || uploadedFiles.length < 1) {
      return response
        .status(400)
        .json({ message: "At least one photo is required" });
    }
    if (uploadedFiles.length > 5) {
      return response
        .status(400)
        .json({ message: "Maximum of 5 photos allowed" });
    }
    const guestName = fields.name?.[0] ?? "";
    const caption = fields.caption?.[0] ?? "";

    const folder = `memory-wall/events/${request.query.eventId}`;
    const results = [];
    for (const file of uploadedFiles) {
      const result = await cloudinary.v2.uploader.upload(file.filepath, {
        public_id: file.newFilename,
        folder,
      });
      results.push({
        imagePublicId: result.public_id,
        imageUrl: result.secure_url,
      });
    }
    await dbConnect();

    const uploadedPhotos = results.map((img) => ({
      imageUrl: img.imageUrl,
      imagePublicId: img.imagePublicId,
      name: guestName,
      caption,
      createdAt: new Date(),
    }));

    const event = await Event.findById(request.query.eventId);
    if (!event) {
      return response.status(404).json({ message: "Event not found" });
    }
    event.uploads.push(...uploadedPhotos);
    await event.save();

    return response.status(200).json({
      ok: true,
      uploaded: uploadedPhotos.length,
      uploads: uploadedPhotos,
    });
  } catch (error) {
    console.error(error);
    return response
      .status(500)
      .json({ message: "Something went wrong. Please try again." });
  }
}
