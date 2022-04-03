import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//Los observables son una coleccion de futuros eventos a los cuales me voy a subscribir y luego nos llegaran de manera asincrona
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PorfolioServicesService {

  constructor(
    private http: HttpClient,
  ) { }

  //Estos metodo los definimos como observables de manera que los componentes que lo consuman puedan subscribirse para asi esperar la respuesta del metodo que obtiene sus datos del servidor
  obtenerDatos():Observable<any>{
    return this.http.get('./assets/data.json');
  }
}
