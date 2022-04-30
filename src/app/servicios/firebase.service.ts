import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import { environment } from 'src/environments/environment';

//Inicializamos el envioronment de firebase, con esto inicializamos la aplicacion de firebase y le estamos pasando el archivo de configuracion 
firebase.initializeApp(environment.firebaseConfig)


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  //Creamos la referencia del storage de firebase
  storageRef = firebase.app().storage().ref();

  constructor() { }

  //Creamos la funcion asincrona (para que espere hasta recibir la informacion del servidor para mostrar la informacion) que nos permite subir la imagen a firebase
  async subirImagen(nombre:string, imgBase64:any, user:string){
    try {
      //Aca lo que hacemos es pasarle la carpeta donded queremos guradar la imagen con el nombre de la imagen
      //Lo que le decimos a firebase es que nos cree una imagen con la url indicada le pasamos la imagen base 64 y le decimos el formato que es en este caso url, pero al colocar el await el programa espera a que se ejecute para seguir
      let respuesta = await this.storageRef.child('users/' + user + '/' +nombre).putString(imgBase64, "data_url")
      //Retornamos la url de la imagen guardada, y le ponemos await para que espere que la respuesta vuelva si no nos va a devolver un null
      return await respuesta.ref.getDownloadURL();
    }catch(err){
      console.log(err)
      //En caso de error muestra el error y retorna un null
      return "";
    }
  }

}
