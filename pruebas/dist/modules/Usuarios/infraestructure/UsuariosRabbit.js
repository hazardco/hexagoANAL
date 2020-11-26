"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Amqp = __importStar(require("amqp-ts"));
//var connection = new Amqp.Connection("amqp://localhost");
//var exchange = connection.declareExchange("hexagoANAL");
//var queue = connection.declareQueue("Mensajes");
//queue.bind(exchange);
//queue.activateConsumer((message) => {
//    console.log("Message received: " + message.getContent());
//});
//
//// it is possible that the following message is not received because
//// it can be sent before the queue, binding or consumer exist
//var msg = new Amqp.Message("Test");
//exchange.send(msg);
var UsuariosRabbit = /** @class */ (function () {
    function UsuariosRabbit() {
        this.connection = new Amqp.Connection("amqp://localhost");
        this.exchange = this.connection.declareExchange("hexagoANAL");
        this.queue = this.connection.declareQueue("Mensajes");
        this.queue.bind(this.exchange);
    }
    UsuariosRabbit.prototype.notifica = function (usuario) {
        //console.log("Usuario creado correctamente");
        console.log(usuario);
        var msg = new Amqp.Message(usuario);
        console.log("Mensaje enviado correctamente!!!!");
        this.exchange.send(msg);
    };
    return UsuariosRabbit;
}());
exports.default = UsuariosRabbit;
