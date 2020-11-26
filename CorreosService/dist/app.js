"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var ObtenerUsuariosHTTPController_1 = __importDefault(require("./modules/Correos/infraestructure/ObtenerUsuariosHTTPController"));
var app = express_1.default();
// Middlewares
app.use(cors_1.default());
app.use(morgan_1.default("dev"));
app.use(body_parser_1.default.json());
var port = 3001;
// Rutas
app.get("/correos", ObtenerUsuariosHTTPController_1.default);
app.listen(port, function () {
    console.log("Listo on port " + port);
});
