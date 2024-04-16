"use strict";
// crud
// polaczyc api z baza
// wpisz cos z api do bazy i wyswietl
// zrob api ktore zwraca cos do fronta
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connectWithMongo_1 = require("./connectWithMongo");
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
const app = (0, express_1.default)();
// Middleware do obslugi danych w JSON
app.use(express_1.default.json());
// Dodanie endpointow API uzytkownikow
app.use("/users", userRoutes_1.default);
// Dodanie endpointow API produktow
app.use("/products", productRoutes_1.default);
// Dodanie endpointu hello world 
app.get("/hello", (req, res) => {
    res.send("Hello World");
});
app.get("/", (req, res) => {
    res.send(":-)");
});
// Polaczenie z baza danych mongodb i uruchomienie serwera
const PORT = 3001;
const server = app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, connectWithMongo_1.connectToDatabase)();
        console.log(`Server listens at ${PORT} host`);
    }
    catch (error) {
        console.error("Error connecting to database:", error);
        process.exit(1);
    }
}));
module.exports = server;
