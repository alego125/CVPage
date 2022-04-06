import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { tap } from 'rxjs';
import { PorfolioServicesService } from 'src/app/servicios/porfolio-services.service';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.scss']
})
export class PortadaComponent implements OnInit {
  
  datos:any; 
  @Output() abrirAccion = new EventEmitter<boolean>();
  @Output() abrirUploadImage = new EventEmitter<boolean>();

  constructor(
    private porfolioService:PorfolioServicesService,    
  ) { 
  }
  
  ngOnInit(): void {
    this.getInfo();
  }

  private getInfo():void{
    this.porfolioService.getInformation().pipe(
      tap(
        data => {
          this.datos = data;
        }
      )
    ).subscribe()
  }

  //Emicion hacia app.component de accion del boton para abrir informacion personal
  abrir():void{
    this.abrirAccion.emit(true);
  }

  //Emitimos el evento de editar imagen
  abrirEditar():void{
    this.abrirUploadImage.emit(true);
    console.log(this.datos.name);

  }

}
