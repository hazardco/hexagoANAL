"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Amqp = __importStar(require("amqp-ts"));
// var connection = new Amqp.Connection("amqp://localhost");
// var exchange = connection.declareExchange("hexagoANAL");
// var queue = connection.declareQueue("Mensajes");
// queue.bind(exchange);
// queue.activateConsumer((message) => {
//    console.log("Message received: " + message.getContent());
// });
//
//// it is possible that the following message is not received because
//// it can be sent before the queue, binding or consumer exist
// var msg = new Amqp.Message("Test");
// exchange.send(msg);
var UsuariosRabbit = /** @class */ (function () {
    function UsuariosRabbit() {
        this.connection = new Amqp.Connection("amqp://rabbitmq");
        this.exchange = this.connection.declareExchange("hexagoANAL");
        this.queue = this.connection.declareQueue("Mensajes");
        this.queue.bind(this.exchange);
        this.queue.activateConsumer(function (message) {
            var usuario = message.getContent();
            console.log("Enviando correo: " + usuario.correo);
        });
    }
    UsuariosRabbit.prototype.notifica_todos = function () {
        // console.log("Usuario creado correctamente");
        // console.log(usuario);
        //const msg = new Amqp.Message(usuario);
        // console.log("Mensaje enviado correctamente!!!!");
        //this.exchange.send(msg);
    };
    return UsuariosRabbit;
}());
exports.default = UsuariosRabbit;
