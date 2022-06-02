import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PorfolioServicesService } from 'src/app/servicios/porfolio-services.service';
import { Skill } from '../../formularios/Entidades/skill.entidad';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  datos:any = [];
  usuario:any;

  @Output() abrirSkillFormulario = new EventEmitter<boolean>();
  @Output() abrireditarSkillFormulario = new EventEmitter<boolean>();
  @Output() editarSkill = new EventEmitter<any>();

  constructor(
    private porfolioService:PorfolioServicesService
  ) { }

  ngOnInit(): void {

    let info = JSON.parse(sessionStorage['currentUser']);
    this.porfolioService.getUsuarioPorNombreUsuario(info.nombreUsuario).subscribe(
      data => {
        this.usuario = data;
      }
    );

    this.porfolioService.getSkill().subscribe(
      data => {
        setTimeout(()=>{
          data.forEach((el:any)=>{
            // console.log(el['idUser']);
            // console.log(this.usuario['id']);
            if(el['idUser'] === this.usuario['id']){
              this.datos.push(el);
            }
          })
        },2000)
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
      location.reload();
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
