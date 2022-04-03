import { Component, OnInit } from '@angular/core';
import { PorfolioServicesService } from 'src/app/servicios/porfolio-services.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})
export class ExperienciaComponent implements OnInit {

  datos:any;

  constructor(
    private porfolioService : PorfolioServicesService
  ) { }

  ngOnInit(): void {
    this.porfolioService.obtenerDatos().subscribe(
      data => {
        this.datos = data;
      }
    );
  }

}
