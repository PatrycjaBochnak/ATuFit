"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = void 0;
const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/";
const dbName = "aTuFitUserProducts";
function connectToDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose.connect(url + dbName, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            console.log("Connected to database successfully!");
        }
        catch (error) {
            console.error("Error connecting to database:", error);
        }
    });
}
exports.connectToDatabase = connectToDatabase;
