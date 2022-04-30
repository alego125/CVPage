import { Provincia } from "./provincia.model";

export interface Ciudad{
    idCiudad:number;
    nombreCiudad:string;
    provincia:Provincia;
}