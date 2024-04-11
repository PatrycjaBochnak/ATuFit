// crud
// polaczyc api z baza
// wpisz cos z api do bazy i wyswietl

// zrob api ktore zwraca cos do fonta

const express = require("express");
const app = express();

app.get("/", (req:any, res:any) => {
  res.send("Hello World");
});

app.listen(3001, () => {
  console.log("Server listens at 3001 host");
});


