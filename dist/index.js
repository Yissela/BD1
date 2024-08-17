"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuario_router_1 = __importDefault(require("./scr/routers/usuario-router"));
const contenido_router_1 = __importDefault(require("./scr/routers/contenido-router"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/user', usuario_router_1.default);
app.use('/contenido', contenido_router_1.default);
app.get("/", (req, res) => {
    res.send("Servidor para tarea");
    res.end();
});
app.listen(3000, () => {
    console.log("Servidor levantado");
});
