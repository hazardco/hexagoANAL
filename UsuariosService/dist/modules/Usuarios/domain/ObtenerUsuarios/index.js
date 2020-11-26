"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const obtenerUsuariosController_1 = __importDefault(require("./obtenerUsuariosController"));
const UsuariosMySQL_1 = __importDefault(require("../../infraestructure/UsuariosMySQL"));
const usuariosReppository = new UsuariosMySQL_1.default();
exports.default = obtenerUsuariosController_1.default(usuariosReppository);
//# sourceMappingURL=index.js.map