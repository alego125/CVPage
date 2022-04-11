import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario-cursos',
  templateUrl: './formulario-cursos.component.html',
  styleUrls: ['./formulario-cursos.component.scss']
})
export class FormularioCursosComponent implements OnInit {

  @Output() cerrarCursoFormulario = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  cerrar():void{
    this.cerrarCursoFormulario.emit(false);
  }

}
