import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { tap } from 'rxjs';
import { PorfolioServicesService } from 'src/app/servicios/porfolio-services.service';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.scss']
})
export class PresentacionComponent implements OnInit {

  datos:any;
  info = JSON.parse(sessionStorage['currentUser']);
  role!:string;
  @Output() abrirPresentacion = new EventEmitter<any>();

  constructor(
    private porfolioService:PorfolioServicesService
  ) { 
    this.info['authorities'].forEach((element:any)=>{
      if(element.authority === 'ROLE_ADMIN'){
        this.role = element.authority
      }
    });
   }

  ngOnInit(): void {
    this.getInfo();
  }

  //Obtenemos la informacion del json
  private getInfo():void{
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

  public abrirForm():void{
    this.abrirPresentacion.emit(true);
  }

}
