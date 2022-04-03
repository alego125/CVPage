import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  valor:boolean = false;

  ngOnInit():void {
  }
  
  abrir(valor:boolean){
    this.valor = valor;
  }

  cerrar(valor:boolean){
    this.valor = valor;
  }

}
