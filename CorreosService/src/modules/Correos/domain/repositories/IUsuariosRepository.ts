import IUsuarioModel from "../models/IUsuario.model";

interface IUsuariosRepository {
    getAll(): Promise<IUsuarioModel[]>;
    add(usuarioNuevo: IUsuarioModel): Promise<IUsuarioModel>;
}

export default IUsuariosRepository;
