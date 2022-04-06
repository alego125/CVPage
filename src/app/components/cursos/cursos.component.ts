import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { PorfolioServicesService } from 'src/app/servicios/porfolio-services.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  datos:any;

  constructor(
    private porfolioService:PorfolioServicesService
  ) { }

  ngOnInit(): void {
    this.getInfo();
  }

  private getInfo():void{
    this.porfolioService.getCursos().pipe(
      tap(
        data => {
          this.datos = data;
        }
      )
    ).subscribe()
  }

}
