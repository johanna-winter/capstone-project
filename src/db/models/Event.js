import mongoose from "mongoose";

const { Schema } = mongoose;

const eventSchema = new Schema({
  title: { type: String, required: true, minlength: 3 },
  description: { type: String },
  date: { type: Date },
});

const Event = mongoose.models.Event || mongoose.model("Event", eventSchema);

export default Event;
