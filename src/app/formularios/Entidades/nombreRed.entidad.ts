export class NombreRedes {

    idNombreRedes!:number;
    nombreRed!:string;

    constructor(idNombreRedes:number, nombreRed:string){
        this.idNombreRedes = idNombreRedes;
        this.nombreRed = nombreRed;
    }

    obtenerNombreRed(){
        let json = {
            "idNombreRedes":this.idNombreRedes,
            "nombreRed":this.nombreRed
        }
        return json;
    }

}