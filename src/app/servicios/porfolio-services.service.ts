import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//Los observables son una coleccion de futuros eventos a los cuales me voy a subscribir y luego nos llegaran de manera asincrona
import { Observable } from 'rxjs';
import { Usuario } from '../modelos/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class PorfolioServicesService {

  constructor(
    private http: HttpClient,
  ) { 

   }

  //Estos metodo los definimos como observables de manera que los componentes que lo consuman puedan subscribirse para asi esperar la respuesta del metodo que obtiene sus datos del servidor
 

  getExperience():Observable<any>{
    return this.http.get('http://localhost:8080/experiencia');
  }

  getProyectos():Observable<any>{
    return this.http.get('http://localhost:8080/proyecto');
  }

  getAptitudes():Observable<any>{
    return this.http.get('http://localhost:8080/skill');
  }
  
  getEducation():Observable<any>{
    return this.http.get('http://localhost:8080/educacion');    
  }
  
  getRedes():Observable<any>{
    return this.http.get('http://localhost:8080/red');
  }

  modificarPersona(persona:any){
    return this.http.put("http://localhost:8080/user/update",persona);
  }

  getCarreras(){
    return this.http.get("http://localhost:3000/carrera");    
  }

  getUniversidades():Observable<any>{
    return this.http.get('http://localhost:8080/institucion');    
  }

  getUsuario():Observable<any>{
    return this.http.get('http://localhost:8080/user/get');
  }

  updateUsuario(usuario:Usuario):Observable<any>{
    return this.http.put('http://localhost:8080/user/update',usuario)
  }

  getDomicilio():Observable<any>{
    return this.http.get('http://localhost:8080/domicilio/get');
  }
  
  getPais():Observable<any>{
    return this.http.get('http://localhost:8080/pais/get');
  }
  getProvincia():Observable<any>{
    return this.http.get('http://localhost:8080/provincia/get');
  }
  getCiudad(id:number):Observable<any>{
    return this.http.get('http://localhost:8080/ciudad/getByCiudad/' + id);
  }

}
