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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_1 = __importDefault(require("../models/product"));
const router = express_1.default.Router();
router.use(express_1.default.json());
router.get("/getProducts", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield product_1.default.find({ "name": req.query.product }).exec();
        res.status(200).json({ products: products });
    }
    catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}));
router.post("/submitData", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, calories, fats, carbohydrates, proteins } = req.body;
        const product = new product_1.default({
            name,
            calories,
            fats,
            carbohydrates,
            proteins,
        });
        yield product.save();
        res.status(201).json({ message: "Product saved successfully" });
    }
    catch (error) {
        console.error("Error saving product:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}));
function fetchProducts() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const documents = yield product_1.default.find({}).exec();
            if (!documents || documents.length === 0) {
                console.log("Can`t found any products");
                return;
            }
            console.log("Found products:", JSON.stringify(documents));
            const productsArray = JSON.parse(JSON.stringify(documents));
            console.log("Products Array:", productsArray);
        }
        catch (error) {
            console.error("Error:", error);
        }
    });
}
fetchProducts();
exports.default = router;
