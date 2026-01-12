import mongoose from "mongoose";

const { Schema } = mongoose;

const eventSchema = new Schema({
  title: { type: String, required: true, minlength: 3 },
  imageUrl: { type: String, default: "/img/default-photo-red.png" },
  description: { type: String },
  date: { type: Date },
  uploads: [
    {
      imageUrl: { type: String, required: true },
      imagePublicId: { type: String, required: true },
      name: String,
      caption: String,
      createdAt: { type: Date, default: Date.now },
    },
  ],
});

const Event = mongoose.models.Event || mongoose.model("Event", eventSchema);

export default Event;
