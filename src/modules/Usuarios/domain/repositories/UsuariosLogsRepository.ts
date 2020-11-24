import UsuarioModel from "../models/usuario.model";
import Usuario from "../models/usuario.model";

interface UsuariosLogsRepository {
    notifica(usuario: UsuarioModel): any;
}

export default UsuariosLogsRepository;