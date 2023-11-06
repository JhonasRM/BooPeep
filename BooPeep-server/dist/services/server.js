"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("../routes/routes")); // Suponho que o arquivo de rotas esteja no mesmo diretório
const app = (0, express_1.default)();
const port = 4000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, routes_1.default)());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/', (req, res) => {
    res.send("Hello, World!");
});
app.listen(port, () => {
    console.log(`Listening to ${port}`);
});