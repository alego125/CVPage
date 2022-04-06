import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { PorfolioServicesService } from 'src/app/servicios/porfolio-services.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})
export class ExperienciaComponent implements OnInit {

  public datos!:any;

  constructor(
    private porfolioService : PorfolioServicesService
    ) {       
    }
    
    ngOnInit(): void {
      this.getExperience()
  }

  private getExperience():void{
    this.porfolioService.getExperience().pipe(
      tap(
        data => {
          this.datos = data;
          console.log(this.datos)
        }
      )
    ).subscribe()
  }

}
