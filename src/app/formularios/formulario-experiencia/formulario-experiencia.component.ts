import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PorfolioServicesService } from 'src/app/servicios/porfolio-services.service';

@Component({
  selector: 'app-formulario-experiencia',
  templateUrl: './formulario-experiencia.component.html',
  styleUrls: ['./formulario-experiencia.component.scss']
})
export class FormularioExperienciaComponent implements OnInit {

  valor!:any;
  imgEmpresa!:string;
  formu:FormGroup;
  
  @Output() cerrarExperiencia = new EventEmitter<boolean>();

  constructor(
    private formBuild:FormBuilder
  ) {
    this.formu = this.formBuild.group({
      nombreEmpresa:['',[Validators.required, Validators.minLength(5)]],
      imagen:['',[Validators.required]],
      description:['',[Validators.required, Validators.minLength(10), Validators.maxLength(250)]],
      initialDate:['',[Validators.required]]
    });
  }
  
  ngOnInit(): void {
    
  }
  
  onSubmit(evento:Event){
    evento.preventDefault();

    if(this.formu.valid){
      alert('Informacion Guardada Exitosamente')
      location.reload()
    }else{
      this.formu.markAllAsTouched();
    }
  }

  onFileChanges(img:any):void{    
    this.imgEmpresa = img[0].base64;
  }

  cerrar():void{
    this.cerrarExperiencia.emit(false);
  }

  get Imagen(){
    return this.formu.get('imagen')
  }

  get NombreEmpresa(){
    return this.formu.get('nombreEmpresa')
  }

  get Description(){
    return this.formu.get('description')
  }

  get InitialDate(){
    return this.formu.get('initialDate')
  }

}
