import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario-redes',
  templateUrl: './formulario-redes.component.html',
  styleUrls: ['./formulario-redes.component.scss']
})
export class FormularioRedesComponent implements OnInit {

  @Output() cerrarRedesFormulario = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  cerrar():void{
    this.cerrarRedesFormulario.emit(false);
  }

}
