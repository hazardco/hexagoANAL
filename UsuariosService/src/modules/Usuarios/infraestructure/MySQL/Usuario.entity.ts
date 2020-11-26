import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity()
export class Usuario {

    @PrimaryColumn()
    public id: string;

    @Column()
    public nombre: string;

    @Column()
    public apellidos: string;

    @Column()
    public correo: string;
}
