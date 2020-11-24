"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var ObtenerUsuariosHTTPController_1 = __importDefault(require("./modules/Usuarios/infraestructure/ObtenerUsuariosHTTPController"));
var CrearUsuarioHTTPController_1 = __importDefault(require("./modules/Usuarios/infraestructure/MySQL/CrearUsuarioHTTPController"));
var app = express_1.default();
typeorm_1.createConnection();
//Middlewares 
app.use(cors_1.default());
app.use(morgan_1.default('dev'));
app.use(body_parser_1.default.json());
var port = 3000;
//Rutas
app.get('/usuarios', ObtenerUsuariosHTTPController_1.default);
//app.get('/usuarios/:id', obtenerUsuarioHTTPController);
app.post('/usuarios', CrearUsuarioHTTPController_1.default);
app.listen(port, function () {
    console.info("Listo on port " + port);
});
