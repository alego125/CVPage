import { Provincia } from "./provincia.entidad";

export class Ciudad{

    idCiudad:number;
    nombreCiudad:string;
    provincia:Provincia;

    constructor(id:number, nombreCiudad:string, provincia:Provincia){
        this.idCiudad = id;
        this.nombreCiudad = nombreCiudad;
        this.provincia = provincia;
    }

    public ciudadObject():Object{
        return {
            "idCiudad":this.idCiudad,
            "nombreCiudad":this.nombreCiudad,
            "provincia":this.provincia
        }
    }

}