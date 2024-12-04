import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
});

export const Items = mongoose.models.Item || mongoose.model("Item", ItemSchema);
