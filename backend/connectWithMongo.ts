const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/";
const dbName = "aTuFitUserProducts";

export async function connectToDatabase() {
    try {
      await mongoose.connect(url + dbName, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Connected to database successfully!");
    } catch (error) {
      console.error("Error connecting to database:", error);
    }
  }
  
