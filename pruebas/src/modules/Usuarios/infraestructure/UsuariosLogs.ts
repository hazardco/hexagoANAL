import UsuarioModel from "../domain/models/usuario.model";
import UsuariosLogsRepository from "../domain/repositories/UsuariosLogsRepository";

class UsuariosLogs implements UsuariosLogsRepository {
    
    public notifica(usuario: UsuarioModel): any {    
        
        console.log("Usuario creado correctamente");
        console.log(usuario);
       
    }
}

export default UsuariosLogs;