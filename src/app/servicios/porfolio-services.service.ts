import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
//Los observables son una coleccion de futuros eventos a los cuales me voy a subscribir y luego nos llegaran de manera asincrona
import { Observable } from 'rxjs';
import { Adress } from '../formularios/Entidades/domicilio.entidad';
import { Proyecto } from '../formularios/Entidades/proyecto.model';
import { Usuario } from '../formularios/Entidades/usuario.entidad';
import { Domicilio } from '../modelos/domicilio.model';

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
    return this.http.get('http://localhost:8080/proyecto/get');
  }

  createProyecto(proyecto:Proyecto):Observable<any>{
    return this.http.post('http://localhost:8080/proyecto/create', proyecto);
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


  updateUsuario(id:number, nombre:string, apellido:string, nacimiento:Date, web:string, telefono:string, email:string, urlPortada:string, urlPerfil:string, domicilio:Adress):Observable<any>{
    const httpParams = new HttpParams();    
    return this.http.put(`localhost:8080/user/update/${id}`,httpParams)
  }

  patchUpdate(id:number, usuario:Usuario):Observable<any>{
    return this.http.patch(`localhost:8080/user/patchUpdate/${id}`, usuario);
  }

  getDomicilio():Observable<any>{
    return this.http.get('http://localhost:8080/domicilio/get');
  }

  getPaisById(id:number):Observable<any>{
    return this.http.get('http://localhost:8080/pais/get/' + id);
  }
  
  getPais():Observable<any>{
    return this.http.get('http://localhost:8080/pais/get');
  }

  getProvinciaById(id:number):Observable<any>{
    return this.http.get('http://localhost:8080/provincia/get/' + id);
  }

  getProvincia():Observable<any>{
    return this.http.get('http://localhost:8080/provincia/get');
  }

  getCiudadById(id:number):Observable<any>{
    return this.http.get('http://localhost:8080/ciudad/get/' + id);
  }

  getCiudad(id:number):Observable<any>{
    return this.http.get('http://localhost:8080/ciudad/getByCiudad/' + id);
  }

}
