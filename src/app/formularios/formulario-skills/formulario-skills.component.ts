import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PorfolioServicesService } from 'src/app/servicios/porfolio-services.service';

@Component({
  selector: 'app-formulario-skills',
  templateUrl: './formulario-skills.component.html',
  styleUrls: ['./formulario-skills.component.scss']
})
export class FormularioSkillsComponent implements OnInit {

  valor!:any;
  
  @Output() cerrarSkillFormulario = new EventEmitter<boolean>();

  constructor(
    private porfolioService:PorfolioServicesService
  ) {}
  
  ngOnInit(): void {
    
  }
  
  cerrar():void{
    this.cerrarSkillFormulario.emit(false);
  }

}
