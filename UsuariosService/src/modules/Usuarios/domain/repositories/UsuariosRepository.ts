import UsuarioModel from "../models/usuario.model";

interface UsuariosRepository {
    getAll(): Promise<UsuarioModel[]>;
    add(usuarioNuevo: UsuarioModel): Promise<UsuarioModel>;
}

export default UsuariosRepository;