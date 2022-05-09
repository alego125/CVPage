import { Usuario } from "./usuario.entidad";

export class Proyecto{
    
    idProyecto:number;
    tituloProyecto:string;
    descripcion:string;
    fechaInicio:Date;
    fechaFin:Date;
    idUser:number;
    


    constructor(idProyecto:number, tituloProyecto:string, descripcion:string, fechaInicio:Date, fechaFin:Date, idUser:number){
        this.idProyecto = idProyecto,
        this.tituloProyecto = tituloProyecto;
        this.descripcion = descripcion;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.idUser = idUser;        
    }


    public proyectoNuevo():any{        
        let json = {            
            "tituloProyecto":this.tituloProyecto,
            "descripcion":this.descripcion,
            "fechaInicio":this.fechaInicio,
            "fechaFin":this.fechaFin,
            "idUser":this.idUser,            
        }
        // return JSON.stringify(json);
        return json;
    }
}