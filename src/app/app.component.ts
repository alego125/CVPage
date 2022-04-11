import { Component, OnInit } from '@angular/core';


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

  cerrarSkillFormulario(val:boolean):void{
    this.valorSkill = val;
  }

  cerrarProyecFormulario(val:boolean):void{
    this.valorProyecto = val;
  }

  abrirProyecFormulario(val:boolean):void{
    this.valorProyecto = val;
  }

  abrirCursoFormulario(val:boolean):void{
    this.valorCursos = val;
  }

  cerrarCursoFormulario(val:boolean):void{
    this.valorCursos = val;
  }

}
