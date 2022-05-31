import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { async } from '@firebase/util';
import { error } from 'console';
import { catchError, observable, Observable, throwError } from 'rxjs';
import { Domicilio } from 'src/app/modelos/domicilio.model';
import { FirebaseService } from 'src/app/servicios/firebase.service';
import { PorfolioServicesService } from 'src/app/servicios/porfolio-services.service';
import { Ciudad } from '../Entidades/ciudad.entidad';
import { Adress } from '../Entidades/domicilio.entidad';
import { Pais } from '../Entidades/pais.entidad';
import { Provincia } from '../Entidades/provincia.entidad';
import { Usuario } from '../Entidades/usuario.entidad';

@Component({
  selector: 'app-upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.scss']
})
export class UploadImagesComponent implements OnInit {


  @Output() cerrarUploadImage = new EventEmitter<boolean>();


  datos!: any;
  idUsuario!: number;
  idDomicilio!: number;
  formu!: FormGroup;

  paises!: any;
  provincias!: any;
  ciudades!: Observable<any>;

  idPais!: number;
  idProvincia: number = 14;
  idCiudad!: number;

  nombreProvincia!: string;
  nombreCiudad!: string;
  nombrePais!: string;

  nombre!: string;
  pais!: string;

  formulario = new FormControl();

  constructor(
    private porfolioService: PorfolioServicesService,
    private formBuild: FormBuilder,
    private fireService: FirebaseService
  ) {

    

  }

  ngOnInit(): void {

    this.paises = this.porfolioService.getPais();
    this.provincias = this.porfolioService.getProvincia();

    let info = JSON.parse(sessionStorage['currentUser']);
    this.porfolioService.getUsuarioPorNombreUsuario(info.nombreUsuario).subscribe(
      data => {
        catchError(this.handleError);
        this.datos = data;
      }
    )

    setTimeout(() => {
      console.log(this.datos);
      this.formu = this.formBuild.group({
        nombre: [this.datos.nombre, [Validators.required, Validators.minLength(5)]],
        apellido: [this.datos.apellido, [Validators.required, Validators.minLength(5)]],
        telefono: [this.datos.telefono, [Validators.required, Validators.minLength(6)]],
        fechaNacimiento: [this.datos.fechaNacimiento, [Validators.required]],
        email: [this.datos.email, [Validators.required, Validators.email]],
        web: [this.datos.web, [Validators.required, Validators.minLength(5)]],
        urlPerfil: [''],
        urlPortada: [''],
        pais: [this.datos.domicilio.ciudad.provincia.pais, [Validators.required]],
        provincia: [this.datos.domicilio.ciudad.provincia, [Validators.required]],
        ciudad: [this.datos.domicilio.ciudad, [Validators.required]],
        calle: [this.datos.domicilio.calle, [Validators.required]],
        numero: [this.datos.domicilio.numero, [Validators.required]],
        departamento: [''],
        piso: ['']
      })

      this.formu.controls['nombre'].setValue(this.datos.nombre)
      this.formu.controls['apellido'].setValue(this.datos.apellido)
      this.formu.controls['telefono'].setValue(this.datos.telefono)
      this.formu.controls['web'].setValue(this.datos.web)
      this.formu.controls['email'].setValue(this.datos.email)
      this.formu.controls['calle'].setValue(this.datos.domicilio.calle)
      this.formu.controls['numero'].setValue(this.datos.domicilio.numero)
      this.formu.controls['pais'].setValue(this.datos.domicilio.ciudad.provincia.pais)
      this.formu.controls['provincia'].setValue(this.datos.domicilio.ciudad.provincia)
      this.formu.controls['ciudad'].setValue(this.datos.domicilio.ciudad)
      this.formu.controls['piso'].setValue(this.datos.domicilio.piso)
      this.formu.controls['departamento'].setValue(this.datos.domicilio.departamento)
      

      console.log(this.formu.valid);

    }, 1000);
  }


  //Metodo para ejecutar cuando se hace click la funcion que tre las ciudades de la base de dato
  iniciarCiudad() {
    this.ciudades = this.porfolioService.getCiudad((this.formu.controls['provincia'].value).idProvincia);
  }


  onSubmit(evento: Event) {

    evento.preventDefault();

    let pais = new Pais(
      (this.formu.controls['pais'].value).idPais,
      (this.formu.controls['pais'].value).nombrePais
    );
    let provincia = new Provincia(
      (this.formu.controls["provincia"].value).idProvincia,
      (this.formu.controls["provincia"].value).nombreProvincia,
      pais
    );
    let ciudad = new Ciudad(
      (this.formu.controls['ciudad'].value).idCiudad,
      (this.formu.controls['ciudad'].value).nombreCiudad,
      provincia
    );
    let domicilio = new Adress(
      this.datos.domicilio.idDomicilio,
      this.formu.value.calle,
      this.formu.value.numero,
      this.formu.value.piso,
      this.formu.value.departamento,
      ciudad
    );


    let actualizacionInformacion = {
      "id": this.datos.id,
      "name": this.datos.name,
      "nombre": this.formu.value.nombre,
      "apellido": this.formu.value.apellido,
      "fechaNacimiento": this.formu.value.fechaNacimiento,
      "web": this.formu.value.web,
      "telefono": this.formu.value.telefono,
      "email": this.formu.value.email,
      "presentacion": this.datos.presentacion,
      "urlPortada": this.datos.urlPortada,
      "urlPerfil": this.datos.urlPerfil,
      "domicilio": domicilio
    }

    console.log(actualizacionInformacion);
    console.log(this.Provincia['provincia'].value);
    console.log(this.formu.controls["piso"].value);


    if (this.formu.valid) {
      this.porfolioService.updateUsuario(actualizacionInformacion, this.datos.id).subscribe(
        () => {
          alert('Infromacion Guardada Exitosamente')
        }, err => {
          alert('Ha Ocurrido un error al guardar la informacion')
          console.log(err);
        }
      );
      location.reload();
    } else {
      this.formu.markAllAsTouched();
    }

  }

  //Guardamos la imagen seleccionada en firebase storage convertimos la imagen en base64 y la guardamos y luego obtenemos la url de la imagen
  onFileChanges1(event: any): void {
    let archivo = event.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(archivo[0]);
    reader.onloadend = () => {
      //Subimos la imagen y en nombre le colocamos el nombre de usuario unido por doble guion bajo a la fecha exacta del momento en milisegundos la cual siempre sera distinta, por ende siempre tendra un nombre diferente
      //Al final mediante un then le decimos que cuando termine de ejecutar los await de subir imagen nos ejecute la arrow function con la url de la imagen en donde la asignamos a la variable imgPort para mostrarla en pantalla
      this.fireService.subirImagen("portada", reader.result, this.datos.name).then(imagenUrl => {
        this.datos.urlPortada = imagenUrl;
      });
    }
    console.log(this.datos.urlPortada);
    
    

  }
  onFileChanges2(event: any): void {
    let archivo = event.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(archivo[0]);
    reader.onloadend = () => {
      this.fireService.subirImagen("perfil", reader.result, this.datos.name).then(imagenUrl => {
        this.datos.urlPerfil = imagenUrl;
      });
    }
    console.log(this.datos.urlPerfil);



  }

  cerrar(): void {
    this.cerrarUploadImage.emit(false);
  }

  //Metodo para manejar errores de peticion http
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  get Nombre() {
    return this.formu.get('nombre')
  }

  get Apellido() {
    return this.formu.get('apellido')
  }

  get Direccion() {
    return this.formu.get('direccion')
  }

  get Telefono() {
    return this.formu.get('telefono')
  }

  get Titulo() {
    return this.formu.get('titulo')
  }

  get Web() {
    return this.formu.get('web')
  }

  get Email() {
    return this.formu.get('email')
  }

  get FechaNacimeinto() {
    return this.formu.get('fechaNacimiento');
  }

  get urlPortada() {
    return this.formu.get('urlPortada')
  }

  get urlPerfil() {
    return this.formu.get('urlPerfil')
  }

  get Pais() {
    return this.formu.controls;
  }

  get Provincia() {
    return this.formu.controls;
  }

  get Ciudad() {
    return this.formu.controls;
  }

  get Numero() {
    return this.formu.get('numero');
  }

  get Calle() {
    return this.formu.get('calle')
  }

  get Piso() {
    return this.formu.get('piso')
  }

  get Departamento() {
    return this.formu.get('departamento')
  }

}
