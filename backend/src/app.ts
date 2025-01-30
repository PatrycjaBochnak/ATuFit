import express from "express";
import cors from "cors";
import { connectToDatabase } from "./connectWithMongo";
import productRoutes from "./routes/productRoutes";

const app = express();

app.use(cors({
  origin: 'https://twoja-domena-frontend.herokuapp.com', // front URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

app.use((req, res, next) => {
  res.set('Content-Type', 'text/javascript');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  next();
});

app.use("/api", productRoutes);

const PORT = process.env.PORT || 3001; 
const server = app.listen(PORT, async () => {
  try {
    await connectToDatabase();
    console.log(`Server listens at ${PORT} host`);
  } catch (error) {
    console.error("Error connecting to database:", error);
    process.exit(1);
  }
});

export default server;
