"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UsuariosLogs = /** @class */ (function () {
    function UsuariosLogs() {
    }
    UsuariosLogs.prototype.notifica = function (usuario) {
        console.log("Usuario creado correctamente");
        console.log(usuario);
    };
    return UsuariosLogs;
}());
exports.default = UsuariosLogs;
