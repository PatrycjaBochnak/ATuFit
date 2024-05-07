import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  calories: { type: Number, required: true },
  fats: { type: Number, required: true },
  carbohydrates: { type: Number, required: true },
  proteins: { type: Number, required: true },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
