<<<<<<< HEAD
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { tap } from 'rxjs';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> parent of 9ff35dd (Agregamos formulario para modificar portada y enlazamos servicio con json en server falso)
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
<<<<<<< HEAD
    this.getInfo();
  }

  //Obtenemos la informacion del json
  private getInfo():void{
    this.porfolioService.getInformation().pipe(
      tap(
        data => {
          this.datos = data;
        }
      )
    ).subscribe()
=======
    this.porfolioService.obtenerDatos().subscribe(
      data => {
        this.datos = data;
      }
    );
>>>>>>> parent of 9ff35dd (Agregamos formulario para modificar portada y enlazamos servicio con json en server falso)
  }

  public abrirForm():void{
    this.abrirPresentacion.emit(true);
  }

}
