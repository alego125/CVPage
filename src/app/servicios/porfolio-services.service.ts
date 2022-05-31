import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
//Los observables son una coleccion de futuros eventos a los cuales me voy a subscribir y luego nos llegaran de manera asincrona
import { Observable, Observer } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Educacion } from '../inicio/formularios/Entidades/educacion.entidad';
import { Experiencia } from '../inicio/formularios/Entidades/experiencia.entidad';
import { Proyecto } from '../inicio/formularios/Entidades/proyecto.model';
import { Skill } from '../inicio/formularios/Entidades/skill.entidad';
import { Domicilio } from '../modelos/domicilio.model';

@Injectable({
  providedIn: 'root'
})
export class PorfolioServicesService {

  constructor(
    private http: HttpClient    
  ) { 

   }

  //Estos metodo los definimos como observables de manera que los componentes que lo consuman puedan subscribirse para asi esperar la respuesta del metodo que obtiene sus datos del servidor

  actualizarGuardarPresentacion(id:number,informacion:string):Observable<any>{
    return this.http.put(environment.urlServer + `user/updatePresentacion/${id}`, informacion);
  }

  getExperience():Observable<any>{
    return this.http.get(environment.urlServer + "experiencia/get");
  }

  createExperiencia(experiencia:Experiencia):Observable<any>{
    return this.http.post(environment.urlServer + "experiencia/create", experiencia)
  }

  deleteExperiencia(id:number):Observable<any>{
    return this.http.delete(environment.urlServer + "experiencia/delete/" + id);
  }

  updateExperiencia(experiencia:Experiencia):Observable<any>{
    return this.http.put(environment.urlServer + "experiencia/update",experiencia);
  }  

  getSkill():Observable<any>{
    return this.http.get(environment.urlServer + "skill/get");
  }

  getSkillById(id:number):Observable<any>{
    return this.http.get(environment.urlServer + "skill/searchById/" + id);
  }

  createSkill(skill:Skill):Observable<any>{
    return this.http.post(environment.urlServer + "skill/create", skill);
  }

  deleteSkill(id:number){
    return this.http.delete(environment.urlServer + "skill/delete/" + id);
  }

  updateSkill(skill:Skill):Observable<any>{
    return this.http.put(environment.urlServer + "skill/update",skill);
  }

  getProyectos():Observable<any>{
    return this.http.get('http://localhost:8080/proyecto/get');
  }

  getProyectoById(id:number):Observable<any>{
    return this.http.get("http://localhost:8080/proyecto/get/" + id);
  }

  deleteProyecto(id:number):Observable<any>{
    return this.http.delete("http://localhost:8080/proyecto/delete/"+id);
  }

  createProyecto(proyecto:Proyecto):Observable<any>{
    return this.http.post('http://localhost:8080/proyecto/create', proyecto);
  }

  updateProyecto(proyecto:Proyecto):Observable<any>{
    return this.http.put('http://localhost:8080/proyecto/update', proyecto);
  }

  getAptitudes():Observable<any>{
    return this.http.get('http://localhost:8080/skill');
  }
  
  getEducacion():Observable<any>{
    return this.http.get(environment.urlServer + "educacion/get");    
  }

  createEducacion(educacion:Educacion):Observable<any>{
    return this.http.post(environment.urlServer + "educacion/create",educacion);
  }

  deleteEducacion(id:number):Observable<any>{
    return this.http.delete(environment.urlServer + "educacion/delete/" + id);
  }

  updateEducacion(educacion:Educacion):Observable<any>{
    return this.http.put(environment.urlServer + "educacion/update",educacion)
  }

  getInstitucion():Observable<any>{
    return this.http.get(environment.urlServer + "institucion/get");    
  }

  getInstitucionById(id:number):Observable<any>{
    return this.http.get(environment.urlServer + "institucion/searchById/" + id);
  }
  
  getRedes():Observable<any>{
    return this.http.get(environment.urlServer + 'red/get');
  }

  getNombreRed():Observable<any>{
    return this.http.get(environment.urlServer + 'nombreRedes/get');
  }

  getNombreRedPorId(id:number):Observable<any>{
    return this.http.get(environment.urlServer + 'nombreRedes/get/' + id);
  }

  createRed(red:any):Observable<any>{
    return this.http.post(environment.urlServer + 'red/create', red);
  }

  updateRed(red:any):Observable<any>{
    return this.http.put(environment.urlServer + 'red/update', red);
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
    return this.http.get(environment.urlServer + 'user/get');
  }

  getUsuarioPorNombreUsuario(nombreUsuario:String):Observable<any>{
    return this.http.get(environment.urlServer + 'user/buscarPorUserName/' + nombreUsuario);
  }

  updateUsuario(informacion:any,id:number){
    return this.http.put(environment.urlServer +'user/updateUser/' + id, informacion);
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
