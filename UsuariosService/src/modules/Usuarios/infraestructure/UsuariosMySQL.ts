import UsuarioModel from "../domain/models/usuario.model";
import UsuariosRepository from "../domain/repositories/usuariosRepository";

import "reflect-metadata";
import {getRepository} from "typeorm";
import { Usuario } from "./MySQL/Usuario.entity";

class UsuariosMySQL implements UsuariosRepository {
    
    public async getAll(): Promise<UsuarioModel[]> {    
        
        return <UsuarioModel[]> await getRepository(Usuario).find();

    }

    public async add(usuarioNuevo: UsuarioModel): Promise<UsuarioModel> {  

        return <UsuarioModel> await getRepository(Usuario).save(usuarioNuevo);
    }

}

export default UsuariosMySQL;