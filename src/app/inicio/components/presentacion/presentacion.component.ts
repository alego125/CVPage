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
  @Output() abrirPresentacion = new EventEmitter<any>();

  constructor(
    private porfolioService:PorfolioServicesService
  ) { }

  ngOnInit(): void {
    this.getInfo();
  }

  //Obtenemos la informacion del json
  private getInfo():void{
    let info = JSON.parse(sessionStorage['currentUser']);
    this.porfolioService.getUsuarioPorNombreUsuario(info.nombreUsuario).pipe(
      tap(
        data => {
          console.log(data);
          this.datos = data;
        }
      )
    ).subscribe()
  }

  public abrirForm():void{
    this.abrirPresentacion.emit(true);
  }

}
