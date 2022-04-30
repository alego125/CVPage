import { Pais } from "./pais.model";

export interface Provincia{
    idProvincia:BigInt;
    nombrePRovincia:string;
    pais:Pais;
}