export class Institucion {

    idInstitucion!:number;
    nombreInstitucion!:string;

    constructor(idInstitucion:number, nombreInstitucion:string){
        this.idInstitucion = idInstitucion;
        this.nombreInstitucion = nombreInstitucion;
    }

    obtenerInstitucion(){
        let json = {
            "idInstitucion":this.idInstitucion,
            "nombreInstitucion":this.nombreInstitucion
        }
        return json;
    }

}