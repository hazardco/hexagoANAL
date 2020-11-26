"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Usuario_entity_1 = require("./MySQL/Usuario.entity");
class UsuariosMySQL {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            let usuarios;
            usuarios = (yield typeorm_1.createConnection({
                type: "mysql",
                host: "localhost",
                port: 3306,
                username: "root",
                password: "",
                database: "prueba",
                entities: [
                    Usuario_entity_1.Usuario
                ],
                synchronize: true,
                logging: false
            }).then((connection) => __awaiter(this, void 0, void 0, function* () {
                let usuariosRepository = yield connection.getRepository(Usuario_entity_1.Usuario);
                console.log(usuariosRepository.find());
                return usuariosRepository.find();
            })).catch(error => console.log(error)));
            return usuarios;
        });
    }
    add(usuarioNuevo) {
        return __awaiter(this, void 0, void 0, function* () {
            return usuarioNuevo;
        });
    }
}
exports.default = UsuariosMySQL;
//# sourceMappingURL=ObtenerUsuariosMySQL.js.map