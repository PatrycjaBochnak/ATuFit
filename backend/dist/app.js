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
const cors_1 = __importDefault(require("cors"));
const connectWithMongo_1 = require("./connectWithMongo");
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
const app = (0, express_1.default)();
const allowedOrigins = [
    "http://localhost:3000",
    "https://atufit-frontend-6bf4b5f39d4a.herokuapp.com", // Dla wersji produkcyjnej
];
app.use((0, cors_1.default)({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        }
        else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(express_1.default.json());
app.use((req, res, next) => {
    res.set("Content-Type", "text/javascript");
    res.setHeader("X-Content-Type-Options", "nosniff");
    next();
});
app.use("/api", productRoutes_1.default);
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong!" });
});
const PORT = process.env.PORT || 3001;
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
exports.default = server;
