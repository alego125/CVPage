import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PorfolioServicesService } from 'src/app/servicios/porfolio-services.service';
import { Skill } from '../Entidades/skill.entidad';

@Component({
  selector: 'app-formulario-skills',
  templateUrl: './formulario-skills.component.html',
  styleUrls: ['./formulario-skills.component.scss']
})
export class FormularioSkillsComponent implements OnInit {

  formu!:FormGroup;
  datos!:any;
  usuario!:any;

  valor!:any;
  
  @Output() cerrarSkillFormulario = new EventEmitter<boolean>();

  constructor(
    private formBuilder:FormBuilder,
    private porfolioService:PorfolioServicesService
  ) {
    this.formu = this.formBuilder.group({
      habilidad:['',[Validators.required,Validators.minLength(3)]],
      porcentaje:['',[Validators.required]]
    })
  }
  
  ngOnInit(): void {
    this.porfolioService.getSkill().subscribe(
      data => {
        this.datos = data;        
      }
    );  
    let info = JSON.parse(sessionStorage['currentUser']);
    this.porfolioService.getUsuarioPorNombreUsuario(info.nombreUsuario).subscribe(
      user => {
        this.usuario = user;
      }
    )
  }

  onSubmit(evento:Event){

    evento.preventDefault()

    

    let skillNuevo = new Skill(1,this.formu.controls["habilidad"].value,this.formu.controls["porcentaje"].value,this.usuario.id)

    
    if(this.formu.valid){
      this.porfolioService.createSkill(skillNuevo.skillNuevo()).subscribe(
        respuesta => {
          console.log(respuesta);
          alert("Skill Agregada")
        },
        err => {
          console.log(err);
          alert("Error!" + err);
        }
      )
      setTimeout(()=>{
        location.reload()
      },2000)
    }else{
      this.formu.markAllAsTouched();
    }

  }
  
  cerrar():void{
    this.cerrarSkillFormulario.emit(false);
  }

  get Habilidad(){
    return this.formu.get('habilidad')
  }

  get Porcentaje(){
    return this.formu.get('porcentaje')
  }

}
