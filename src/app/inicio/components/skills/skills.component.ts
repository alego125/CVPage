import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PorfolioServicesService } from 'src/app/servicios/porfolio-services.service';
import { Skill } from '../../formularios/Entidades/skill.entidad';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  datos:any;
  usuario:any;
  info = JSON.parse(sessionStorage['currentUser']);
  role!:string;

  @Output() abrirSkillFormulario = new EventEmitter<boolean>();
  @Output() abrireditarSkillFormulario = new EventEmitter<boolean>();
  @Output() editarSkill = new EventEmitter<any>();

  constructor(
    private porfolioService:PorfolioServicesService
  ) { 
    this.info['authorities'].forEach((element:any)=>{
      if(element.authority === 'ROLE_ADMIN'){
        this.role = element.authority
      }
    });
   }

  ngOnInit(): void {

    this.porfolioService.getUsuarioPorNombreUsuario(this.info.nombreUsuario).subscribe(
      data => {
        this.usuario = data;
      }
    );

    this.porfolioService.getSkill().subscribe(
      data => {
        this.datos = data        
      }
    );   
  }

  deleteSkill(skill:Skill){
    let confirmacion = confirm("Confirmar eliminacion de Skill");

    if(confirmacion){
      this.porfolioService.deleteSkill(skill.idSkill).subscribe(
        () => {
          alert("Elemento eliminado")
        },
        err => {
          console.log(err);
          alert("Error!" + err);
        }
      )
      setTimeout(()=>{
        location.reload()
      },2000)
    }


  }
  
  abrir():void{
    this.abrirSkillFormulario.emit(true);
  }

  abrirEditar(skill:Skill){
    this.abrireditarSkillFormulario.emit(true);
    this.editarSkill.emit(skill);
  }



}
