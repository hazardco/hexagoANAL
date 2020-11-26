import UsuariosMySQL from "../../infraestructure/UsuariosMySQL";
import ObtenerUsuariosController from "./ObtenerUsuariosController";

const usuariosReppository = new UsuariosMySQL();

export default ObtenerUsuariosController(usuariosReppository);
