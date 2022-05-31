import { Ciudad } from "./ciudad.entidad";

export class Adress{

    idDomicilio:number;
    calle:string;
    numero:string;
    piso:string;
    departamento:string;
    ciudad:Ciudad;

    constructor(id:number, calle:string, numero:string, piso:string, departamento:string, ciudad:Ciudad){
        this.idDomicilio = id;
        this.calle = calle;
        this.numero = numero;
        this.piso = piso;
        this.departamento = departamento;
        this.ciudad = ciudad;
    }

    public domicilioObject():Object{
        return {
            "idDomicilio":this.idDomicilio,
            "calle":this.calle,
            "numero":this.numero,
            "piso":this.piso,
            "departamento":this.departamento,
            "ciudad":this.ciudad
        }
    }

}