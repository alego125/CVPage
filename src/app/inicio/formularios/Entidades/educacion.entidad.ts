import { Institucion } from "./institucion.entidad";

export class Educacion{
    
    idEducacion!:number;
    nombreTitulo!:string;
    imagenInstitucion!:string;
    fechainicio!:Date;
    fechaFin!:Date;
    idUser!:number;
    institucion!:Institucion;
    


    constructor(idEducacion:number, nombreTitulo:string, imagenInstitucion:string, fechainicio:Date, fechaFin:Date, idUser:number, institucion:Institucion){
        this.idEducacion = idEducacion,
        this.nombreTitulo = nombreTitulo,
        this.imagenInstitucion = imagenInstitucion,
        this.fechainicio = fechainicio,
        this.fechaFin = fechaFin,
        this.idUser = idUser
        this.institucion = institucion
    }

    public educacionNueva():any{        
        let json = {            
            "nombreTitulo":this.nombreTitulo,
            "imagenInstitucion":this.imagenInstitucion,
            "fechainicio":this.fechainicio,
            "fechaFin":this.fechaFin,
            "idUser":this.idUser,
            "institucion":this.institucion
        }
        // return JSON.stringify(json);
        return json;
    }

    public actualizarEducacion():any{        
        let json = {  
            "idEducacion":this.idEducacion,          
            "nombreTitulo":this.nombreTitulo,
            "imagenInstitucion":this.imagenInstitucion,
            "fechainicio":this.fechainicio,
            "fechaFin":this.fechaFin,
            "idUser":this.idUser,
            "institucion":this.institucion
        }
        // return JSON.stringify(json);
        return json;
    }

}