import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PorfolioServicesService } from 'src/app/servicios/porfolio-services.service';

@Component({
  selector: 'app-upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.scss']
})
export class UploadImagesComponent implements OnInit {

  imgPort!:string;
  imgPerf!:string;
  titulo!:string;
  telefono!:string;
  nombre!:string;
  direccion!:string;
  web!:string;
  formu!:FormGroup;
  formulario = new FormControl();
  @Output() cerrarUploadImage = new EventEmitter<boolean>();

  constructor(
    private porfolioService:PorfolioServicesService,
    private formBuild:FormBuilder
  ) { 

    this.formu = this.formBuild.group({
      nombre:['',[Validators.required,Validators.minLength(5)]],
      telefono:['',[Validators.required,Validators.minLength(6)]],
      direccion:['',[Validators.required,Validators.minLength(5)]],
      titulo:['',[Validators.required,Validators.minLength(5)]],
      email:['',[Validators.required, Validators.email]],
      web:['',[Validators.required,Validators.minLength(5)]],
      imagen1:['',[Validators.required]],
      imagen2:['',[Validators.required]],      
    })

  }

  ngOnInit(): void {
    this.porfolioService.getInformation().subscribe(
      data => {
        this.imgPort = data.backImage;
        this.imgPerf = data.image;
        this.nombre = data.name;
        this.telefono = data.telefono;
        this.titulo = data.titulo;
        this.direccion = data.ubicacion;
        this.web = data.web;
      }
    );

    this.Nombre?.setValue(this.nombre);
  }

  onSubmit(evento:Event){

    evento.preventDefault();

    if(this.formu.valid){
      alert('Infromacion Guardada Exitosamente')
      location.reload();
    }else{
      this.formu.markAllAsTouched();
    }

  }

  onFileChanges1(base:any):void{
    this.imgPerf = base[0].base64;
  }
  onFileChanges2(base:any):void{
    this.imgPort = base[0].base64;
  }

  cerrar():void{
    this.cerrarUploadImage.emit(false);
  }

  get Nombre(){
    return this.formu.get('nombre')
  }

  get Direccion(){
    return this.formu.get('direccion')
  }

  get Telefono(){
    return this.formu.get('telefono')
  }

  get Titulo(){
    return this.formu.get('titulo')
  }

  get Web(){
    return this.formu.get('web')
  }

  get Email(){
    return this.formu.get('email')
  }

  get Imagen1(){
    return this.formu.get('imagen1')
  }

  get Imagen2(){
    return this.formu.get('imagen2')
  }

}
