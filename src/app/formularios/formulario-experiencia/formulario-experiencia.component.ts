import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario-experiencia',
  templateUrl: './formulario-experiencia.component.html',
  styleUrls: ['./formulario-experiencia.component.scss']
})
export class FormularioExperienciaComponent implements OnInit {

  valor!:any;

  
  @Output() cerrarExperiencia = new EventEmitter<boolean>();

  constructor() { 
    
  }
  
  ngOnInit(): void {
    console.log(this.valor);
  }
  
  cerrar():void{
    this.cerrarExperiencia.emit(false);
  }

}
