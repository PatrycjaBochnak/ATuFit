import express from "express";
import mongoose, { Document } from "mongoose";
import Product from "../models/product";

const router = express.Router();

router.use(express.json());

router.get("/getProducts", async (req, res) => {
  try {
    const products = await Product.find({}).exec();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/submitData", async (req, res) => {
  try {
    const { name, calories, fats, carbohydrates, proteins } = req.body;

    const product = new Product({
      name,
      calories,
      fats,
      carbohydrates,
      proteins,
    });

    await product.save();

    res.status(201).json({ message: "Product saved successfully" });
  } catch (error) {
    console.error("Error saving product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

async function fetchProducts() {
  try {
    const documents = await Product.find({}).exec();

    if (!documents || documents.length === 0) {
      console.log("Can`t found any products");
      return;
    }

    console.log("Found products:", JSON.stringify(documents));
    const productsArray = JSON.parse(JSON.stringify(documents));
    console.log("Products Array:", productsArray);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchProducts();

export default router;
