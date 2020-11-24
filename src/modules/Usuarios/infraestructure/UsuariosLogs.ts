import UsuarioModel from "../domain/models/usuario.model";
import UsuariosLogsRepository from "../domain/repositories/UsuariosLogsRepository";
import { Usuario } from "./MySQL/Usuario.entity";


class UsuariosLogs implements UsuariosLogsRepository {
    
    public notifica(usuario: UsuarioModel): any {    
        
        console.log("Usuario creado correctamente");
        console.log(usuario);
       
    }
}

export default UsuariosLogs;