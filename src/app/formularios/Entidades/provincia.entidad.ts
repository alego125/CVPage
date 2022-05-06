import { Pais } from "./pais.entidad";

export class Provincia{

    idProvincia:number;
    nombreProvincia:string;
    pais:Pais;

    constructor(id:number, nombreProvincia:string, pais:Pais){
        this.idProvincia = id;
        this.nombreProvincia = nombreProvincia;
        this.pais = pais;
    }

    public provinciaObject():Object{
        return {
            "idProvincia":this.idProvincia,
            "nombreProvincia":this.nombreProvincia,
            "pais":this.pais
        }
    }

}