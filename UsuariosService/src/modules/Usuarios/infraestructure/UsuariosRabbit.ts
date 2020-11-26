import * as Amqp from "amqp-ts";
import UsuarioModel from "../domain/models/IUsuario.model";
import UsuariosLogsRepository from "../domain/repositories/IUsuariosLogsRepository";

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

class UsuariosRabbit implements UsuariosLogsRepository {

        public connection: Amqp.Connection;
        public exchange: Amqp.Exchange;
        public queue: Amqp.Queue;

    constructor() {
        this.connection = new Amqp.Connection("amqp://rabbitmq");
        this.exchange = this.connection.declareExchange("hexagoANAL");
        this.queue = this.connection.declareQueue("Mensajes");
        this.queue.bind(this.exchange);
    }

    public notifica(usuario: UsuarioModel): any {

        // console.log("Usuario creado correctamente");
        // console.log(usuario);
        const msg = new Amqp.Message(usuario);
        // console.log("Mensaje enviado correctamente!!!!");
        this.exchange.send(msg);
    }
}

export default UsuariosRabbit;
