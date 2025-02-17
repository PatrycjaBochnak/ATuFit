import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoURI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/aTuFitUserProducts";

export async function connectToDatabase() {
  try {
    await mongoose.connect(mongoURI)
    console.log("✅ Connected to database successfully!");
  } catch (error) {
    console.error("❌ Error connecting to database:", error);
    process.exit(1); 
  }
}

connectToDatabase();