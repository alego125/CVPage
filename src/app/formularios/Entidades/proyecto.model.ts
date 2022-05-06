import { Usuario } from "./usuario.entidad";

export class Proyecto{
    
    idProyecto:number;
    tituloProyecto:string;
    descripcion:string;
    fechaInicio:Date;
    fechaFin:Date;
    usuario:Usuario;
    


    constructor(idProyecto:number, tituloProyecto:string, descripcion:string, fechaInicio:Date, fechaFin:Date, usuario:Usuario){
        this.idProyecto = idProyecto,
        this.tituloProyecto = tituloProyecto;
        this.descripcion = descripcion;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.usuario = usuario;        
    }


    public proyectoNuevo():any{        
        let json = {            
            "tituloProyecto":this.tituloProyecto,
            "descripcion":this.descripcion,
            "fechaInicio":this.fechaInicio,
            "fechaNacimiento":this.fechaFin,
            "usuario":this.usuario,            
        }
        // return JSON.stringify(json);
        return json;
    }
}