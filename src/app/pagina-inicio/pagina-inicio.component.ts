import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from '../servicios/autenticacion.service';

@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.scss']
})
export class PaginaInicioComponent implements OnInit {

  formu:FormGroup;
  authorization:boolean = true;
  iniciando:boolean = false;

  constructor(
    private formBuild:FormBuilder,
    private autenticacionService:AutenticacionService, 
    private ruta:Router
    ) 
    { 
    this.formu = this.formBuild.group({
      nombreUsuario:['',[Validators.required]],
      password:['',[Validators.required, Validators.minLength(7)]],      
    });
   }

  ngOnInit(): void {
  }

  onSubmit(event:Event){
    event.preventDefault;
    console.log(this.formu.value);
    //Nos subscribimos a continuacion al servicio de autenticacion, a este le debemos sar los values del form que serian las credenciales necesarias para iniciar sesion
    this.autenticacionService.iniciarSesion(this.formu.value).subscribe(
        data=>{
          //Mostramos por consola los datos devueltos por el servicio
          this.iniciando = true;
          console.log("Data: " + JSON.stringify(data));
          this.authorization = true;
          //Si la autenticacion es correcta redirigimos al usuario a la ruta de portfolio para mostrar el contenido
          this.ruta.navigate(['/portfolio']);
        },err=>{
          if(err.error.error === "Unauthorized"){
            this.authorization = false;
          }
          
        }
      
      )
  }

  get Usuario(){
    return this.formu.get('nombreUsuario');
  }

  get Password(){
    return this.formu.get('password');
  }

}
