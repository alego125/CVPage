import { Ciudad } from "./ciudad.model";

export interface Domicilio{
    idDomicilio:BigInt;
    calle:string;
    numero:string;
    piso:string;
    departamento:string;
    ciudad:Ciudad;

}