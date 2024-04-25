import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: { type: Number, required: true},
  title: { type: String, required: true },
  calories: { type: Number, required: true },
  fats: { type: Number, required: true },
  carbs: { type: Number, required: true },
  proteins: { type: Number, required: true },
});

export const Product = mongoose.model("Product", productSchema);
