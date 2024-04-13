"use strict";
// crud
// polaczyc api z baza
// wpisz cos z api do bazy i wyswietl
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
// zrob api ktore zwraca cos do fronta
const express_1 = __importDefault(require("express"));
const connectWithMongo_1 = require("./connectWithMongo");
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("Hello World");
});
const server = app.listen(3001, () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, connectWithMongo_1.connectToDatabase)();
        console.log("Server listens at 3001 host");
    }
    catch (error) {
        console.error("Error connecting to database:", error);
        process.exit(1);
    }
}));
module.exports = server;
