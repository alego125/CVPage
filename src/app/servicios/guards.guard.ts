import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
//Para crear el guards usamos el comando ng g g ruta, y elegimos CanActivate, esto hara que se implemente la interface canActivate que nos va a obligar a implementar un metodo que se llama canAtivate y sera necesario para realizar la proteccion de las rutas
//Este servicio nos va a servir para proteger las rutas para que solo sean accedidas si el usuario fue autenticado
export class GuardsGuard implements CanActivate {

  //Como vamos a usar las credenciales de autenticacion para realizar las validaciones debemos inyectar el servicio de autenticacion en el constructor
  constructor(private autenticacionService:AutenticacionService, private ruta:Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      //Traemos al usuario autenticado mediante el metodo get del servicio de autenticacion y lo guardamos en la variable currentUser
      let currentUser = this.autenticacionService.UsuarioAutenticado;
      //Entonces ahora validamos, si el usuario autenticado existe, o sea que tiene datos y ademas contiene un accesToken, en ese caso retornamos true, si no retornamos false

      if(currentUser && currentUser.token){
        return true;
      }
      //Si no es true entonces se redirecciona al usuario al formulario de iniciar session y se devuelve un false
      this.ruta.navigate(['/inicio-sesion']);
      return false;
  }
  
}
