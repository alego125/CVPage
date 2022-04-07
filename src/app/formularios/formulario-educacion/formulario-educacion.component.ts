import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PorfolioServicesService } from 'src/app/servicios/porfolio-services.service';

@Component({
  selector: 'app-formulario-educacion',
  templateUrl: './formulario-educacion.component.html',
  styleUrls: ['./formulario-educacion.component.scss']
})
export class FormularioEducacionComponent implements OnInit {

  valor!:any;
  imgEmpresa!:string;
  
  @Output() cerrarEducaFormulario = new EventEmitter<boolean>();

  constructor(
    private porfolioService:PorfolioServicesService
  ) {}
  
  ngOnInit(): void {
    
  }
  
  onFileChanges(img:any):void{    
    this.imgEmpresa = img[0].base64;
  }

  cerrar():void{
    this.cerrarEducaFormulario.emit(false);
  }

}
