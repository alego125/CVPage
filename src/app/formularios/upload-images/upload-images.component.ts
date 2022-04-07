import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  @Output() cerrarUploadImage = new EventEmitter<boolean>();

  constructor(
    private porfolioService:PorfolioServicesService
  ) { }

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

}
