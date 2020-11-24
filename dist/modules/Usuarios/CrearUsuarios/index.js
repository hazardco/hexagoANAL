"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CrearUsuarioController_1 = __importDefault(require("./CrearUsuarioController"));
const UsuariosRepository_1 = __importDefault(require("../../Usuarios/domain/repositories/UsuariosRepository;"));
const usuarioReppository = new UsuariosRepository_1.default();
exports.default = CrearUsuarioController_1.default(usuarioReppository);
//# sourceMappingURL=index.js.map