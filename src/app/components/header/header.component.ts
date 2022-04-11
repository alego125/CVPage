import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PorfolioServicesService } from 'src/app/servicios/porfolio-services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  datos:any;
  @Output() abrirRedesFormulario = new EventEmitter<boolean>();

  constructor(
    private datosPorfolio:PorfolioServicesService
  ) { }

  ngOnInit(): void {
    this.datosPorfolio.getInformation().subscribe(
      data => {
        this.datos = data;
      }
    )
  }

  abrir():void{
    this.abrirRedesFormulario.emit(true);
  }

}
