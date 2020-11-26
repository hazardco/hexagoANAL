import IUsuarioModel from "../models/IUsuario.model";

interface IUsuariosLogsRepository {
    notifica(usuario: IUsuarioModel): any;
}

export default IUsuariosLogsRepository;
