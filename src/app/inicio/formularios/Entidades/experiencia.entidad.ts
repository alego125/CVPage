import { json } from "express";

export class Experiencia{

    idExperiencia:number;
    nombreEmpresa:string;
    descripcionTareas:string;
    fechaInicio:Date;
    fechaFin:Date;
    urlImagen:string;
    idUser:number;

    constructor(idExperiencia:number, nombreEmpresa:string, descripcionTareas:string, fechaInicio:Date, fechaFin:Date, urlImagen:string, idUser:number){
        this.idExperiencia = idExperiencia;
        this.nombreEmpresa = nombreEmpresa;
        this.descripcionTareas = descripcionTareas;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.urlImagen = urlImagen;
        this.idUser = idUser;
    }

    public crearExperiencia():any{
        let json = {
            "nombreEmpresa":this.nombreEmpresa,
            "descripcionTareas":this.descripcionTareas,
            "fechaInicio":this.fechaInicio,
            "fechaFin":this.fechaFin,
            "urlImagen":this.urlImagen,
            "idUser":this.idUser
        }
        return json;
    }

    public editarExperiencia():any{
        let json = {
            "idExperiencia":this.idExperiencia,
            "nombreEmpresa":this.nombreEmpresa,
            "descripcionTareas":this.descripcionTareas,
            "fechaInicio":this.fechaInicio,
            "fechaFin":this.fechaFin,
            "urlImagen":this.urlImagen,
            "idUser":this.idUser
        }
        return json;
    }

}