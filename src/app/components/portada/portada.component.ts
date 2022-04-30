import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PorfolioServicesService } from 'src/app/servicios/porfolio-services.service';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.scss']
})
export class PortadaComponent implements OnInit {
  
  datos!:any; 

  @Output() abrirAccion = new EventEmitter<boolean>();
  @Output() abrirUpAccion = new EventEmitter<boolean>();

  constructor(
    private porfolioService:PorfolioServicesService,    
  ) { 
  }
  
  ngOnInit(): void {
    this.porfolioService.getUsuario().subscribe(
      data => {
        //Obtenemos datos del json 
        this.datos = data[0];       
      }
      )
  }

  //Emicion hacia app.component de accion del boton para abrir informacion personal
  abrir():void{
    this.abrirAccion.emit(true);
  }

  abrirUpImg():void{
    this.abrirUpAccion.emit(true);
  }

}
