import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PorfolioServicesService } from 'src/app/servicios/porfolio-services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  datos:any;
  linkedin!:string;
  facebook!:string;
  instagram!:string;
  github!:string;
  @Output() abrirRedesFormulario = new EventEmitter<boolean>();

  constructor(
    private datosPorfolio:PorfolioServicesService
  ) { }

  ngOnInit(): void {
    this.datosPorfolio.getRedes().subscribe(
      redes => {
        redes.forEach((red:any)=>{
          if(red.nombreRed.idNombreRedes == 1){
            this.linkedin = red.link;
          }else if(red.nombreRed.idNombreRedes == 2){
            this.facebook = red.link;
          }else if(red.nombreRed.idNombreRedes == 3){
            this.instagram = red.link;
          }else if(red.nombreRed.idNombreRedes == 4){
            this.github = red.link;
          }
        })
      }
    )
  }

  abrir():void{
    this.abrirRedesFormulario.emit(true);
  }

}
