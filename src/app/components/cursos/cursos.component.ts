import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PorfolioServicesService } from 'src/app/servicios/porfolio-services.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  datos:any;

  @Output() abrirCursoFormulario = new EventEmitter<boolean>();

  constructor(
    private porfolioService:PorfolioServicesService
  ) { }

  ngOnInit(): void {
    this.porfolioService.getCursos().subscribe(
      data => {
        this.datos = data;
      }
    );
  }

  abrir():void{
    this.abrirCursoFormulario.emit(true);
  }

}
