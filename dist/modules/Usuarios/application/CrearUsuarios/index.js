"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CrearUsuarioController_1 = __importDefault(require("./CrearUsuarioController"));
var UsuariosMySQL_1 = __importDefault(require("../../infraestructure/UsuariosMySQL"));
var UsuariosLogs_1 = __importDefault(require("../../infraestructure/UsuariosLogs"));
var usuariosRepository = new UsuariosMySQL_1.default();
var usuariosLogsRepository = new UsuariosLogs_1.default();
exports.default = CrearUsuarioController_1.default(usuariosRepository, usuariosLogsRepository);
