import express from "express";
import Product from "../models/product.js";

const router = express.Router();

router.post('/api/submitData', async (req, res) => {
  try {
    const { name, calories, fats, carbohydrates, proteins } = req.body;

    const product = new Product({
      name,
      calories,
      fats,
      carbohydrates,
      proteins
    });

    await product.save();

    res.status(201).json({ message: 'Product saved successfully' });
  } catch (error) {
    console.error('Error saving product:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
