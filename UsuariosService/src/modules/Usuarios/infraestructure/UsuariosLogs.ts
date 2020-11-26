import IUsuarioModel from "../domain/models/IUsuario.model";
import IUsuariosLogsRepository from "../domain/repositories/IUsuariosLogsRepository";

class UsuariosLogs implements IUsuariosLogsRepository {

    public notifica(usuario: IUsuarioModel): any {

        // console.log("Usuario creado correctamente");
        // console.log(usuario);

    }
}

export default UsuariosLogs;
