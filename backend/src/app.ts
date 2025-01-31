import express from "express";
import cors from "cors";
import { connectToDatabase } from "./connectWithMongo";
import productRoutes from "./routes/productRoutes";

const app = express();

const allowedOrigins = [
  'http://localhost:3000', // Dla lokalnego środowiska
  'https://atufit-frontend-6bf4b5f39d4a.herokuapp.com' // Dla wersji produkcyjnej
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
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

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

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
