// crud
// polaczyc api z baza
// wpisz cos z api do bazy i wyswietl
// zrob api ktore zwraca cos do fronta

import express from "express";
import { connectToDatabase } from "./connectWithMongo";
import userRoutes from "./routes/userRoutes";
import productRoutes from "./routes/productRoutes";

const app = express();

// Middleware do obslugi danych w JSON
app.use(express.json());

// Dodanie endpointow API uzytkownikow
app.use("/users", userRoutes);

// Dodanie endpointow API produktow
app.use("/products", productRoutes);

// Dodanie endpointu hello world 
app.get("/hello", (req: any, res: any) => {
  res.send("Hello World");
});
app.get("/", (req: any, res: any) => {
  res.send(":-)");
});

// Polaczenie z baza danych mongodb i uruchomienie serwera
const PORT = 3001;
const server = app.listen(PORT, async () => {
  try {
    await connectToDatabase();
    console.log(`Server listens at ${PORT} host`);
  } catch (error) {
    console.error("Error connecting to database:", error);
    process.exit(1);
  }
});

module.exports = server;
