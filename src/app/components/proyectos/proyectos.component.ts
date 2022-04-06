import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { PorfolioServicesService } from 'src/app/servicios/porfolio-services.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {

  datos:any;

  constructor(
    private porfolioService:PorfolioServicesService
  ) { }

  ngOnInit(): void {
    this.getInfo();
  }

  private getInfo():void{
    this.porfolioService.getProyectos().pipe(
      tap(
        data => {
          this.datos = data;
        }
      )
    ).subscribe()
  }

}
