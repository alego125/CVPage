import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title:string = "Hola mundo"
  valor:boolean = false;
  valorImage:boolean = false;
  valorPresentacion = false;

  ngOnInit():void {
  }
  
  abrir(valor:boolean):void{
    this.valor = valor;
  }

  cerrar(valor:boolean):void{
    this.valor = valor;
  }

  abrirFormImage(val:boolean):void{
    this.valorImage = val;
  }
  
  cerrarFormImage(val:boolean):void{
    this.valorImage = val;
  }

  abrirPresentacion(val:boolean):void{
    this.valorPresentacion = val;
  }

  cerrarPresentacion(val:boolean):void{
    this.valorPresentacion = val;
  }

}
