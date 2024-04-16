"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const productSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    calories: { type: Number, required: true },
    fats: { type: Number, required: true },
    carbs: { type: Number, required: true },
    proteins: { type: Number, required: true },
});
exports.Product = mongoose_1.default.model("Product", productSchema);
