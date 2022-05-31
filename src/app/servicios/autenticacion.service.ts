import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  //Url de la api con la informacion de autenticacion donde le enviamos los datos y esta nos devuelve la informacionde del usuario para el inicio de session
  url = environment.urlServer + "auth/login";
  //El behavior subject es un tipo especial de observable que contiene o conserva al ultima informacion recibida
  currentUserSubject:BehaviorSubject<any>;

  constructor(private http:HttpClient) { 
    console.log("El servicio de autenticacion esta corriendo");

    //Inicializamos el behavuir subject con la informacion del usuario actual mediante el session storage obteniendo el item currentUser y en caso de no estar este usamos un operador de cortocircuito y le decimos que nos devuelva un objeto vacio ya que el parse esta esperando un objeto para convertirlo a json
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem("currentUser") || "{}"));
   }


   //Creamos el metodo de iniciar sesion el cual recibe como parametro las credeciales del usuario y ademas devuelve un observable para que los controladores puedan subscribirse, en este metodo hacemos la llmada a la api y la retornamos al controlador
   iniciarSesion(credenciales:any):Observable<any>{
    //Realizamos la obtencion de la sesion mediante el metodo post el cual recibe la url y las credenciales, seguido usamos el metodo pipe el cual lo que hace es simplemente realizar una encadenacion de operadores, es decir que nos permite realizar acciones previamente a retornar la respuesta a los controladores es decir a el componente. En nuestro caso usaremos el operador map para encadenar, este lo que hace es que al momento de obtener los datos de la respuesta por parte de la api, con este lo que poderiamos hacer es modificarlos y despues mandarselos a los componentes
    return this.http.post(this.url, credenciales).pipe(
      map(data=>{

        //Lo primero que debemos hacer aqui es guardar lo que nos devuelve la api en el storage, ya que esta informacion la vamos a necesitar luego para acceder a los recursos del servidor
        //El session storage almacena informacion en el navegador hasta que la pestañla de este se cierra, el local storage almacena indefinidamente indormacion 
        //Seteamos el item en el session storage con el nombre que habiamos definido de currentUser y le pasamos la data como cadena de caracteres en formato de json. Luego de esto hay que inyectar este servicio en donde hagamos el inicio de sesion
        sessionStorage.setItem('currentUser',JSON.stringify(data))

        //Asignamos los datos al behaviorSubject si no nos vamos a poder usarlo luego para inciar sesion a estos datos ya que no van a aexistir
        this.currentUserSubject.next(data);

        console.log(this.currentUserSubject);

        return data;
      })
    )
   }


   get UsuarioAutenticado(){
    //El behaviorsubject almacena la informacion del ultimo observable que en este caso es la del usuario por lo que entonces aca lo que hacemos es devolver el behaviorSubject que contendra la informacion del usuario
    return this.currentUserSubject.value;
   }

}
