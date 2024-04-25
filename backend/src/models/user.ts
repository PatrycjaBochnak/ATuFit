import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: { type: Number, required: true},
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

export const User = mongoose.model("User", userSchema);
