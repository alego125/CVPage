import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { tap } from 'rxjs';
import { PorfolioServicesService } from 'src/app/servicios/porfolio-services.service';

@Component({
  selector: 'app-upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.scss']
})
export class UploadImagesComponent implements OnInit {

  public archivoPort:any;
  public archivoProf:any;
  public titulo!:string;
  public nombre!:string;
  public direccion!:string;
  public telefono!:string;
  public web!:string;

  @Output() cerrarAction = new EventEmitter<boolean>();

  constructor(
    private porfolioData:PorfolioServicesService
  ) { }

  ngOnInit(): void {
    this.getInfo()
  }

  cerrar():void{
    this.cerrarAction.emit(false);
  }

  //Metodo para subir imagen de portada
  subirImagePort(evento:any):any{
    
    //Otra manera de pasar varios elementos a un arregl
    // evento.forEach((element:any) => {
    //   this.archivos.push(element.base64)
    // });

    //Verifico que lo que traemos sea jpg en caso contrario no dejamos que lo suba
    if(evento[0].type === "image/jpg" || evento[0].type ==="image/jpeg"){
      //Paso a la variable el base64 de la imagen de portada
      this.archivoPort = evento[0].base64

    }else{
      alert("Debe subir solo imagenes en formato jpg")
    }
  }
  
  //Metodo para subir imagen de perfil
  subirImageProf(evento:any):any{
    if(evento[0].type === "image/jpg" || evento[0].type ==="image/jpeg"){
      this.archivoProf = evento[0].base64      
    }else{
      alert("Debe subir solo imagenes en formato jpg")
    }
  }

  private getInfo(): void{
    this.porfolioData.getInformation().pipe(
      tap(
        data => {
          this.archivoProf = data.image;
          this.archivoPort = data.backImage;
          this.nombre = data.name;
          this.direccion = data.ubicacion;
          this.telefono = data.telefono;
          this.titulo = data.titulo;
          this.web = data.web;
        }    
      )
    ).subscribe()
  }


   

}
