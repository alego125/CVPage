import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { response } from 'express';
import { copyFileSync } from 'fs';
import { ConnectableObservable } from 'rxjs';
import { NuevoUsuario } from '../inicio/formularios/Entidades/nuevoUsuario.entidad';
import { AutenticacionService } from '../servicios/autenticacion.service';
import { PorfolioServicesService } from '../servicios/porfolio-services.service';
import { ValidacionesPropias } from '../validaciones/validaciones-propias';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {

  formu:FormGroup;
  checkBox:any;

  constructor(
    private formBuild:FormBuilder,
    private porfolioService: PorfolioServicesService, 
    private ruta:Router
    ) 
    { 
    this.formu = this.formBuild.group({
      nombreUsuario:['',[Validators.required]],
      password:[null,[Validators.required, Validators.minLength(7)]],      
      confirmPassword:[null,[Validators.required, Validators.minLength(7)]],      
      nombre:['',[Validators.required]],      
      apellido:['',[Validators.required]],      
      email:['',[Validators.required, Validators.email]],
      administrador:['']
    },
    {
      // check whether our password and confirm password match
      validator: ValidacionesPropias.passwordMatchValidator
    });    
   }

  ngOnInit(): void {
  }

  //Obtenemos el check de administrador 
  onChange(event:any){
    console.log(event.target.checked);
    this.checkBox = event.target.checked;
  }

  onSubmit(event:Event){
    event.preventDefault;
    console.log(this.formu.value);
    if(this.formu.valid){
      console.log(this.checkBox);

      let nuevoUsuario = new NuevoUsuario(this.formu.controls['nombre'].value, this.formu.controls['nombreUsuario'].value, this.formu.controls['email'].value, this.formu.controls['password'].value,this.formu.controls['apellido'].value)

      if(!this.checkBox){
        this.porfolioService.createUsuario(nuevoUsuario.usuario()).subscribe(
          response => {
            console.log(response);
            alert(response.mensaje);
            this.ruta.navigate(['/inicio-sesion']);
          },
          err=>{
            console.log(err);
            alert('Error al crear usuario');
          }
        );
      }
      else {
        this.porfolioService.createUsuario(nuevoUsuario.usuarioAdmin()).subscribe(
          response => {
            console.log(response);
            alert(response.mensaje);
            this.ruta.navigate(['/inicio-sesion']);

          },
          err=>{
            console.log(err);
            alert('Error al crear usuario');
          });
      }

    }else{
      this.formu.markAllAsTouched;
    }
    //Nos subscribimos a continuacion al servicio de autenticacion, a este le debemos sar los values del form que serian las credenciales necesarias para iniciar sesion
    // this.autenticacionService.iniciarSesion(this.formu.value).subscribe(
    //     data=>{
    //       //Mostramos por consola los datos devueltos por el servicio
    //       console.log("Data: " + JSON.stringify(data));

    //       //Si la autenticacion es correcta redirigimos al usuario a la ruta de portfolio para mostrar el contenido
    //       this.ruta.navigate(['/portfolio']);
    //     }
      
    //   )
  }

  get Usuario(){
    return this.formu.get('nombreUsuario');
  }

  get Password(){
    return this.formu.get('password');
  }

  get ConfirmPassword(){
    return this.formu.get('confirmPassword');
  }

  get Nombre(){
    return this.formu.get('nombre');
  }

  get Apellido(){
    return this.formu.get('apellido');
  }

  get Email(){
    return this.formu.get('email');
  }

  get Admnistrador(){
    return this.formu.get('administrador');
  }

}
