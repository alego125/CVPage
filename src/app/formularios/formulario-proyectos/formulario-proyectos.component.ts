import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario-proyectos',
  templateUrl: './formulario-proyectos.component.html',
  styleUrls: ['./formulario-proyectos.component.scss']
})
export class FormularioProyectosComponent implements OnInit {

  @Output() cerrarProyecFormulario = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  cerrar():void{
    this.cerrarProyecFormulario.emit(false);
  }
}
