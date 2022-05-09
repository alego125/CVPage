import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Skill } from './formularios/Entidades/skill.entidad';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title:string = "Hola mundo"
  valor:boolean = false;
  valorImage:boolean = false;
  valorPresentacion = false;
  valorExperiencia = false;
  valorEducacion = false;
  valorSkill = false;
  valorProyecto = false;
  valorCursos = false;
  valorRedes = false;
  valorEdicionProyecto = false;
  skillEditar:any = false
  infoSkill!:any;
  infoProyecto!:any;

  @Output() eviarProyecto = new EventEmitter<any>();


  ngOnInit():void {
  }
  
  abrir(valor:boolean){
    this.valor = valor;
  }

  cerrar(valor:boolean){
    this.valor = valor;
  }

  abrirRedesFormulario(val:boolean):void{
    this.valorRedes = val;
  }

  cerrarRedesFormulario(val:boolean):void{
    this.valorRedes = val;
  }

  abrirUpImg(valor:boolean):void{
    this.valorImage = valor;
  }
 
  cerrarFormImage(val:boolean):void{
    this.valorImage = val;
  }

  abrirPresentacion(val:boolean):void{
    this.valorPresentacion = val;
  }

  cerrarPresentacion(val:boolean):void{
    this.valorPresentacion = val;
  }

  abrirExperiencia(val:boolean):void{
    this.valorExperiencia = val;
  }

  cerrarExperiencia(val:boolean):void{
    this.valorExperiencia = val;
  }

  abrirEducaFormulario(val:boolean):void{
    this.valorEducacion = val;
  }

  cerrarEducaFormulario(val:boolean):void{
    this.valorEducacion = val;
  }

  abrirSkillFormulario(val:boolean):void{
    this.valorSkill = val;
  }

  abrirEditarSkill(val:boolean):void{
    this.skillEditar = val;
  }

  edicionSkill(skill:any):void{
    this.infoSkill = skill;
  }

  cerrarSkillFormulario(val:boolean):void{
    this.valorSkill = val;
  }

  cerrarEditarSkill(val:boolean):void{
    this.skillEditar = val;
  }

  cerrarProyecFormulario(val:boolean):void{
    this.valorProyecto = val;
  }

  abrirProyecFormulario(val:boolean):void{
    this.valorProyecto = val;
  }

  abrirFormularioEdicionProyecto(val:boolean):void{
    this.valorEdicionProyecto = val;
  }

  editarProyecto(infoProyecto:any):void{
    this.infoProyecto = infoProyecto;
  }

  cerrarFormularioEdicionProyecto(val:boolean):void{
    this.valorEdicionProyecto = val;
  }

  abrirCursoFormulario(val:boolean):void{
    this.valorCursos = val;
  }

  cerrarCursoFormulario(val:boolean):void{
    this.valorCursos = val;
  }

}
