import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { PorfolioServicesService } from 'src/app/servicios/porfolio-services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  datos:any;

  constructor(
    private datosPorfolio:PorfolioServicesService
  ) { }

  ngOnInit(): void {
    this.getInfo()
  }

  getInfo():void{
    this.datosPorfolio.getInformation().pipe(
      tap(
        data => {
          this.datos = data;
        }
      )
    ).subscribe()
  }

}
