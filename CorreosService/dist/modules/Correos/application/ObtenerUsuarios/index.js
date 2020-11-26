"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var UsuariosRabbit_1 = __importDefault(require("../../infraestructure/UsuariosRabbit"));
var ObtenerUsuariosController_1 = __importDefault(require("./ObtenerUsuariosController"));
var usuariosReppository = new UsuariosRabbit_1.default();
exports.default = ObtenerUsuariosController_1.default(usuariosReppository);
