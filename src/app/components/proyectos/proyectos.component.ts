import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PorfolioServicesService } from 'src/app/servicios/porfolio-services.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {

  datos:any;
  @Output() abrirProyecFormulario = new EventEmitter<boolean>();

  constructor(
    private porfolioService:PorfolioServicesService
  ) { }

  ngOnInit(): void {
    this.porfolioService.getProyectos().subscribe(
      data => {
        this.datos = data;
      }

    );
  }

  abrir():void{
    this.abrirProyecFormulario.emit(true);
  }

}
