import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { PorfolioServicesService } from 'src/app/servicios/porfolio-services.service';
import { Usuario } from '../../formularios/Entidades/usuario.entidad';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  datos!: Usuario;
  redes!: any;
  linkedin!: string;
  facebook!: string;
  instagram!: string;
  github!: string;
  role!:string;
  info = JSON.parse(sessionStorage['currentUser']);

  @Output() abrirRedesFormulario = new EventEmitter<boolean>();

  constructor(
    private datosPorfolio: PorfolioServicesService,
    private servicioAuth: AutenticacionService,
    private ruter: Router
  ) {
    this.info['authorities'].forEach((element:any)=>{
      if(element.authority === 'ROLE_ADMIN'){
        this.role = element.authority
      }
    });

  }

  ngOnInit(): void {
    
    this.datosPorfolio.getRedes().subscribe(
      response => {
        this.redes = response;
        response.forEach((red: any) => {
          if (red.nombreRed.idNombreRedes == 1) {
            this.instagram = red.link;
          } else if (red.nombreRed.idNombreRedes == 2) {
            this.facebook = red.link;
          } else if (red.nombreRed.idNombreRedes == 3) {
            this.linkedin = red.link;
          } else if (red.nombreRed.idNombreRedes == 4) {
            this.github = red.link;
          }
        }
        )
      }
    );        
  }

  logOut(){
      this.servicioAuth.logOut();
      this.ruter.navigate(['/inicio-sesion']);
    }

  abrir(): void {
      this.abrirRedesFormulario.emit(true);
    }

}
