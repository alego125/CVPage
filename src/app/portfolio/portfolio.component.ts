import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  valor:boolean = false;
  valorImage:boolean = false;
  valorPresentacion = false;
  valorExperiencia = false;
  valorEducacion = false;
  valorSkill = false;
  valorProyecto = false;
  valorRedes = false;
  valorEdicionProyecto = false;
  valorEditarEducacion = false;
  valorEditarExperiencia = false;
  skillEditar:any = false
  infoSkill!:any;
  infoProyecto!:any;
  infoEducacion!:any;
  infoExperiencia!:any;

  @Output() eviarProyecto = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
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

  abrirEditarExperiencia(val:boolean):void{
    this.valorEditarExperiencia = val;
  }

  cerrarExperiencia(val:boolean):void{
    this.valorExperiencia = val;
  }

  cerrarEditarExperiencia(val:boolean):void{
    this.valorEditarExperiencia = val;
  }

  editarExperiencia(experiencia:any):void{
    this.infoExperiencia = experiencia;
  }

  abrirEducaFormulario(val:boolean):void{
    this.valorEducacion = val;
  }

  cerrarEducaFormulario(val:boolean):void{
    this.valorEducacion = val;
  }

  cerrarEditarEducacion(val:boolean):void{
    this.valorEditarEducacion = val;
  }

  abrirEditarFormularioEducacion(val:boolean):void{
    this.valorEditarEducacion = val;
  }

  editarEducacion(educacion:any):void{
    this.infoEducacion = educacion;
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

}
