import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from '../servicios/autenticacion.service';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.scss']
})
export class InitialPageComponent implements OnInit {

  constructor(
    private autenticacionService:AutenticacionService,
    private ruta:Router
  ) { }

  ngOnInit(): void {
  }

  entrarSinUsuario(){
    let userLogin = {    
      "nombreUsuario":"user",
      "password":"user"     
  }
    this.autenticacionService.iniciarSesion(userLogin).subscribe(
      data=>{
        //Mostramos por consola los datos devueltos por el servicio
        //Si la autenticacion es correcta redirigimos al usuario a la ruta de portfolio para mostrar el contenido
        setTimeout(()=>{
          this.ruta.navigate(['/portfolio']);
        },4000)
      }
    
    ) 
  }

}