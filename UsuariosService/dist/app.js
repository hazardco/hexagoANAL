"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var CrearUsuarioHTTPController_1 = __importDefault(require("./modules/Usuarios/infraestructure/CrearUsuarioHTTPController"));
var ObtenerUsuariosHTTPController_1 = __importDefault(require("./modules/Usuarios/infraestructure/ObtenerUsuariosHTTPController"));
var app = express_1.default();
typeorm_1.createConnection();
// Middlewares
app.use(cors_1.default());
app.use(morgan_1.default("dev"));
app.use(body_parser_1.default.json());
var port = 3002;
// Rutas
app.get("/usuarios", ObtenerUsuariosHTTPController_1.default);
// app.get('/usuarios/:id', obtenerUsuarioHTTPController);
app.post("/usuarios", CrearUsuarioHTTPController_1.default);
app.listen(port, function () {
    // console.log(`Listo on port ${port}`);
});
