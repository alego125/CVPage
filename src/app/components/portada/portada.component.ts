import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PorfolioServicesService } from 'src/app/servicios/porfolio-services.service';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.scss']
})
export class PortadaComponent implements OnInit {
  
  datos:any; 
  @Output() abrirAccion = new EventEmitter<boolean>();

  constructor(
    private porfolioService:PorfolioServicesService,    
  ) { 
  }
  
  ngOnInit(): void {
    this.porfolioService.obtenerDatos().subscribe(
      data => {
        //Obtenemos datos del json 
        this.datos = data;
      }
      )
  }

  //Emicion hacia app.component de accion del boton para abrir informacion personal
  abrir():void{
    this.abrirAccion.emit(true);
  }

}
