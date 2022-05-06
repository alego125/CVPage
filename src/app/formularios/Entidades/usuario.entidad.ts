import { Adress } from "./domicilio.entidad";

export class Usuario{
    
    id:number;
    name:string;
    nombre:string;
    apellido:string;
    fechaNacimiento:Date;
    web:string;
    telefono:string;
    email:string;
    presentacion:string;
    urlPortada:string;
    urlPerfil:string;
    domicilio:Adress;


    constructor(id:number, name:string, nombre:string, apellido:string, fechaNacimiento:Date, web:string, telefono:string, email:string, presentacion:string, urlPortada:string, urlPerfil:string, domicilio:Adress){
        this.id = id,
        this.name = name;
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
        this.web = web;
        this.telefono = telefono;
        this.email = email;
        this.presentacion = presentacion;
        this.urlPerfil = urlPerfil;
        this.urlPortada = urlPortada;
        this.domicilio = domicilio;
    }


    public usuarioObject():Object{
        // let json = `{
        //     "id":${this.id},
        //     "name":${this.name},
        //     "nombre":${this.nombre},
        //     "apellido":${this.apellido},
        //     "fechaNacimiento":${this.fechaNacimiento},
        //     "web":${this.web},
        //     "telefono":${this.telefono},
        //     "email":${this.email},
        //     "presentacion":${this.presentacion},
        //     "urlPortada":${this.urlPortada},
        //     "urlPerfil":${this.urlPerfil},
        //     "domicilio":${this.domicilio}
        // }`
        // return JSON.stringify(json);
        let json = {
            "id":this.id,
            "name":this.name,
            "nombre":this.nombre,
            "apellido":this.apellido,
            "fechaNacimiento":this.fechaNacimiento,
            "web":this.web,
            "telefono":this.telefono,
            "email":this.email,
            "presentacion":this.presentacion,
            "urlPortada":this.urlPortada,
            "urlPerfil":this.urlPerfil,
            "domicilio":this.domicilio
        }
        return JSON.stringify(json);
    }
}