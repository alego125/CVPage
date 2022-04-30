import { Domicilio } from "./domicilio.model";

export interface Usuario{
    id:BigInt;
    usuario:string;
    nombre:string;
    apellido:string;
    fechaNacimiento:Date;
    web:string;
    telefono:string;
    email:string;
    presentacion:string;
    urlPortada:string;
    urlPerfil:string;
    domicilio:Domicilio;

}