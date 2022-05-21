import { NombreRedes } from "./nombreRed.entidad";

export class Red {

    idRed!:number;
    link!:string;
    idUser!:number;
    nombreRed!:NombreRedes;

    constructor(idRed:number, link:string, idUser:number,nombreRed:NombreRedes){
        this.idRed = idRed;
        this.link = link;
        this.idUser = idUser;
        this.nombreRed = nombreRed;
    }

    crearNombreRed(){
        let json = {
            "link": this.link,
            "idUser": this.idUser,
            "nombreRed": this.nombreRed
        }
        return json;
    }

    actualizarNombreRed(){
        let json = {
            "idRed": this.idRed,
            "link": this.link,
            "idUser": this.idUser,
            "nombreRed": this.nombreRed
        }
        return json;
    }

}