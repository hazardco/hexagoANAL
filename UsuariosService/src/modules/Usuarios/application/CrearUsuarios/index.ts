import UsuariosLogs from "../../infraestructure/UsuariosLogs";
import UsuariosMySQL from "../../infraestructure/UsuariosMySQL";
import UsuariosRabbit from "../../infraestructure/UsuariosRabbit";
import CrearUsuarioController from "./CrearUsuarioController";

const usuariosRepository = new UsuariosMySQL();
// const usuariosLogsRepository = new UsuariosLogs();
const usuariosLogsRepository = new UsuariosRabbit();

export default CrearUsuarioController(usuariosRepository, usuariosLogsRepository);
