import IUsuarioModel from "../domain/models/IUsuario.model";
import UsuariosRepository from "../domain/repositories/IUsuariosRepository";

import "reflect-metadata";
import {getRepository} from "typeorm";
import { Usuario } from "./MySQL/Usuario.entity";

class UsuariosMySQL implements UsuariosRepository {

    public async getAll(): Promise<IUsuarioModel[]> {

        return await getRepository(Usuario).find() as IUsuarioModel[];

    }

    public async add(usuarioNuevo: IUsuarioModel): Promise<IUsuarioModel> {

        return await getRepository(Usuario).save(usuarioNuevo) as IUsuarioModel;
    }

}

export default UsuariosMySQL;
