import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title:string = "Hola mundo"

  ngOnInit():void {
  }  

}
