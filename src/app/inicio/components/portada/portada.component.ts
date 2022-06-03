import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PorfolioServicesService } from 'src/app/servicios/porfolio-services.service';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.scss']
})
export class PortadaComponent implements OnInit {
  
  datos!:any; 
  info = JSON.parse(sessionStorage['currentUser']);
  role!:string;

  @Output() abrirAccion = new EventEmitter<boolean>();
  @Output() abrirUpAccion = new EventEmitter<boolean>();

  constructor(
    private porfolioService:PorfolioServicesService,    
  ) { 
    this.info['authorities'].forEach((element:any)=>{
      if(element.authority === 'ROLE_ADMIN'){
        this.role = element.authority
      }
    });
  }
  
  ngOnInit(): void {
    this.porfolioService.getUsuario().subscribe(
      response => {
        response.forEach((element:any) => {
          if(element.rol === 'admin'){
            this.datos = element
          }
        });
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
