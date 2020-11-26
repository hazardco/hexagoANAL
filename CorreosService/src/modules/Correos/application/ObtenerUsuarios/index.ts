import UsuariosRabbit from "../../infraestructure/UsuariosRabbit";
import ObtenerUsuariosController from "./ObtenerUsuariosController";

const usuariosReppository = new UsuariosRabbit();

export default ObtenerUsuariosController(usuariosReppository);
