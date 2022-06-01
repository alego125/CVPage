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

  @Output() abrirRedesFormulario = new EventEmitter<boolean>();

  constructor(
    private datosPorfolio: PorfolioServicesService,
    private servicioAuth: AutenticacionService,
    private ruter: Router
  ) {

    setTimeout(() => {
      console.log(this.redes);
      this.redes.forEach((red: any) => {
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
    }, 2000)

  }

  ngOnInit(): void {

    let info = JSON.parse(sessionStorage['currentUser']);
    this.datosPorfolio.getUsuarioPorNombreUsuario(info.nombreUsuario).subscribe(
      data => {        
        this.datosPorfolio.getRedByUser(data.id).subscribe(
          response => {
            this.redes = response;
          }
        );        
      });   
  }

  logOut(){
      this.servicioAuth.logOut();
      this.ruter.navigate(['/inicio-sesion']);
    }

  abrir(): void {
      this.abrirRedesFormulario.emit(true);
    }

}
