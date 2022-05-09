export class Skill{
    
    idSkill!:number;
    nombreSkill!:string;
    porcentaje!:number;
    idUser!:number;
    


    constructor(idSkill:number, nombreSkill:string, porcentaje:number, idUser:number){
        this.idSkill = idSkill,
        this.nombreSkill = nombreSkill,
        this.porcentaje = porcentaje,
        this.idUser = idUser
    }

    public skillNuevo():any{        
        let json = {            
            "nombreSkill":this.nombreSkill,
            "porcentaje":this.porcentaje,
            "idUser":this.idUser
        }
        // return JSON.stringify(json);
        return json;
    }

}