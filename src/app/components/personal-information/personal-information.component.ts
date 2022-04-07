import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
    this.porfolioService.getInformation().subscribe(
      data => {
        this.datos = data;
      }
    );
  }

  cerrar(){
    this.cerrarEmit.emit(false);
  }

}
