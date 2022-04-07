import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PorfolioServicesService } from 'src/app/servicios/porfolio-services.service';

@Component({
  selector: 'app-formulario-experiencia',
  templateUrl: './formulario-experiencia.component.html',
  styleUrls: ['./formulario-experiencia.component.scss']
})
export class FormularioExperienciaComponent implements OnInit {

  valor!:any;
  imgEmpresa!:string;
  
  @Output() cerrarExperiencia = new EventEmitter<boolean>();

  constructor(
    private porfolioService:PorfolioServicesService
  ) { 
    
  }
  
  
  ngOnInit(): void {
    
  }
  
  onFileChanges(img:any):void{    
    this.imgEmpresa = img[0].base64;
  }

  cerrar():void{
    this.cerrarExperiencia.emit(false);
  }

}
