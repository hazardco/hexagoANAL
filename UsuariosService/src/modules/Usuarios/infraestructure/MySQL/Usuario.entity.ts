import {Entity, Column, PrimaryColumn} from "typeorm";

@Entity()
export class Usuario {

    @PrimaryColumn()
    id: string;

    @Column()
    nombre: string;

    @Column()
    apellidos: string;
}