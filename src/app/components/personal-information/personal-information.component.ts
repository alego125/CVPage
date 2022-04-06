import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { tap } from 'rxjs';
import { PorfolioServicesService } from 'src/app/servicios/porfolio-services.service';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {

  datos!:any;

  @Output() cerrarEmit = new EventEmitter<boolean>();

  constructor(
    private porfolioService: PorfolioServicesService
  ) { }

  ngOnInit(): void {
    this.getInfo()
  }

  cerrar(){
    this.cerrarEmit.emit(false);
  }

  private getInfo():void{
    this.porfolioService.getInformation().pipe(
      tap(
        data => {
          this.datos = data;
        }
      )
    ).subscribe()
  }

}
