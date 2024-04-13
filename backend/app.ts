// crud
// polaczyc api z baza
// wpisz cos z api do bazy i wyswietl

// zrob api ktore zwraca cos do fronta

import express from 'express';
import { connectToDatabase } from './connectWithMongo';

const app = express();

app.get("/", (req: any, res: any) => {
  res.send("Hello World");
});

const server = app.listen(3001, async () => {
  try {
    await connectToDatabase();
    console.log("Server listens at 3001 host");
  } catch (error) {
    console.error("Error connecting to database:", error);
    process.exit(1);
  }
});


module.exports = server;
