import { Component, OnInit } from '@angular/core';
import { PorfolioServicesService } from 'src/app/servicios/porfolio-services.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  datos:any;

  constructor(
    private porfolioService:PorfolioServicesService
  ) { }

  ngOnInit(): void {
    this.porfolioService.getAptitudes().subscribe(
      data => {
        this.datos = data;
      }
    );   
  }



}
