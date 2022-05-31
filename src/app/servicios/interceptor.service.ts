import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
//Para que este servicio se comporte como un interceptor debemos implementar la interface interceptor, esta interface me obliga a implementar el metodointercept
//Debemos agregar en el app module dentro de providers el http interceptor de la siguiente manera providers: provide:HTTP_INTERCEPTORS, useClass:InterceptorService, multi:true esto en tre llaves
export class InterceptorService implements HttpInterceptor{

  constructor(private autenticacionService:AutenticacionService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //Este metodo lo que hara es interceptar el request, agregarle el token y luego dejar que siga su curso
    
    //Ahora lo que debemos hacer es transformar el request, es decir capturarlo agregarle el token y dejamos que siga su curso. Accedemos al metodo get de usuarioAutenticado el cual contiene la tinformacion que nos devuelve el behaviorSubject del usuario cuando se autentifica
    let currentUser = this.autenticacionService.UsuarioAutenticado;

    //Validamos que el currentUser tenga almacenado el token, 
    if(currentUser && currentUser.token){
      //En caso de que exista el token entonces hacemos un request, para poder mediante este setear en el encabezado el token, para esto clonamos el request y asi de esta manera setear en el ecabezado el token
      req = req.clone({
        setHeaders:{
          Authorization:`Bearer ${currentUser.token}`
        }
      })
    }
    // finalmente mandamos a la consola para ver si esta funcionando el interceptor
    console.log("Interceptor esta corriendo" + JSON.stringify(currentUser));

    //En el final retornamos mediante el manejador handle el request req esto permite que el metodo deje seguir el curso de la aplicacion hacia el request
    return next.handle(req);
  }
}
