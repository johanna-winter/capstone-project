import formidable from "formidable";
import { v2 as cloudinary } from "cloudinary";

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
    response.status(405).json({ message: "Method not allowed" });
    return;
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

    const folder = `memory-wall/events/${request.query.eventId}`;
    const results = [];
    for (const file of uploadedFiles) {
      const result = await cloudinary.uploader.upload(file.filepath, {
        public_id: file.newFilename,
        folder,
      });
      results.push({
        public_id: result.public_id,
        secure_url: result.secure_url,
        bytes: result.bytes,
        format: result.format,
        width: result.width,
        height: result.height,
      });
    }
    return response
      .status(200)
      .json({ ok: true, uploaded: results.length, images: results });
  } catch (error) {
    console.error(error);
    return response
      .status(500)
      .json({ message: "Something went wrong. Please try again." });
  }
}
