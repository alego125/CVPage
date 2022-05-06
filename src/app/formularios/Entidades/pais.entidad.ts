export class Pais{

    idPais:number;
    nombrePais:string;

    constructor(id:number, nombrePais:string){
        this.idPais = id;
        this.nombrePais = nombrePais;
    }

    public paisObject():Object{
        return {
            "idPais":this.idPais,
            "nombrePais":this.nombrePais
        }
    }

}