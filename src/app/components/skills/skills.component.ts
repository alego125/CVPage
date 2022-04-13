import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PorfolioServicesService } from 'src/app/servicios/porfolio-services.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  datos:any;

  @Output() abrirSkillFormulario = new EventEmitter<boolean>();

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
  
  abrir():void{
    this.abrirSkillFormulario.emit(true);
  }


}
