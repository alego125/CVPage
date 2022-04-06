import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { PorfolioServicesService } from 'src/app/servicios/porfolio-services.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.scss']
})
export class EducacionComponent implements OnInit {

  datos:any;

  constructor(
    private porfolioService:PorfolioServicesService
  ) { }

  ngOnInit(): void {
    this.getInfo();
  }

  private getInfo():void{
    this.porfolioService.getEducation().pipe(
      tap(
        data => {
          this.datos = data;
        }
      )
    ).subscribe()
  }

}
