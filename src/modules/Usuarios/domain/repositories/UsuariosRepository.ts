import UsuarioModel from "../models/usuario.model";
import Usuario from "../models/usuario.model";

interface UsuariosRepository {
    getAll(): Promise<Usuario[]>;
    add(usuarioNuevo: UsuarioModel): Promise<Usuario>;
}

export default UsuariosRepository;