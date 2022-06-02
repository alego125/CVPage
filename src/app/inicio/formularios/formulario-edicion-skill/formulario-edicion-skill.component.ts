import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PorfolioServicesService } from 'src/app/servicios/porfolio-services.service';
import { Skill } from '../Entidades/skill.entidad';

@Component({
  selector: 'app-formulario-edicion-skill',
  templateUrl: './formulario-edicion-skill.component.html',
  styleUrls: ['./formulario-edicion-skill.component.scss']
})
export class FormularioEdicionSkillComponent implements OnInit {

  formu!:FormGroup;
  datos!:any;
  usuario!:any;
  skillObtenido!:Skill;

  valor!:any;
  
  @Output() cerrarEditarSkillFormulario = new EventEmitter<boolean>();
  @Input() infoSkill:any;

  constructor(
    private formBuilder:FormBuilder,
    private porfolioService:PorfolioServicesService
  ) {
    this.formu = this.formBuilder.group({
      habilidad:['',[Validators.required,Validators.minLength(4)]],
      porcentaje:['',[Validators.required]]
    })
  }
  
  ngOnInit(): void {
    this.porfolioService.getSkillById(this.infoSkill.idSkill).subscribe(
      skill => {
        this.skillObtenido = skill;
        this.formu.controls["habilidad"].setValue(skill.nombreSkill)
        this.formu.controls["porcentaje"].setValue(skill.porcentaje)
      }
    );
  }

  onSubmit(evento:Event){

    evento.preventDefault()

    let skill = new Skill(this.skillObtenido.idSkill,this.formu.controls["habilidad"].value,this.formu.controls["porcentaje"].value,this.skillObtenido.idUser)    

    
    if(this.formu.valid){
      
      this.porfolioService.updateSkill(skill).subscribe(
        respuesta => {
          console.log(respuesta);
          alert("Skill actualizado")          
        },
        err => {
          console.log(err);
          alert("Error!" + err)
        }
      );
      location.reload();

    }else{
      this.formu.markAllAsTouched();
    }

  }
  
  cerrar():void{
    this.cerrarEditarSkillFormulario.emit(false);
  }

  get Habilidad(){
    return this.formu.get('habilidad')
  }

  get Porcentaje(){
    return this.formu.get('porcentaje')
  }


}