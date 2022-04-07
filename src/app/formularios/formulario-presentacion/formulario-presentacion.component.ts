import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { tap } from 'rxjs';
import { PorfolioServicesService } from 'src/app/servicios/porfolio-services.service';

@Component({
  selector: 'app-formulario-presentacion',
  templateUrl: './formulario-presentacion.component.html',
  styleUrls: ['./formulario-presentacion.component.scss']
})
export class FormularioPresentacionComponent implements OnInit {

  public info!:string;
  @Output() cerrarVentana = new EventEmitter<any>();

  constructor(
    private porfolioService:PorfolioServicesService
  ) { }

  ngOnInit(): void {
    this.getPresentation();
  }

  getPresentation():void{
    this.porfolioService.getInformation().pipe(
      tap(
        data => {
          this.info = data.about;
        }
      )      
    ).subscribe()
  }

  cerrar():void{
    this.cerrarVentana.emit(false);
  }

}
