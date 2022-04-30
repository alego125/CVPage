import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { async } from '@firebase/util';
import { catchError, observable, Observable, throwError } from 'rxjs';
import { Domicilio } from 'src/app/modelos/domicilio.model';
import { FirebaseService } from 'src/app/servicios/firebase.service';
import { PorfolioServicesService } from 'src/app/servicios/porfolio-services.service';

@Component({
  selector: 'app-upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.scss']
})
export class UploadImagesComponent implements OnInit {


  @Output() cerrarUploadImage = new EventEmitter<boolean>();

  datos!: any;
  formu!: FormGroup;

  paises!: any;
  provincias!: any;
  ciudades!: Observable<any>;

  idPais!: number;
  idProvincia: number = 14;
  idCiudad!: number;

  nombre!: string;

  formulario = new FormControl();

  constructor(
    private porfolioService: PorfolioServicesService,
    private formBuild: FormBuilder,
    private fireService: FirebaseService
  ) {

    this.formu = this.formBuild.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      telefono: ['', [Validators.required, Validators.minLength(6)]],
      direccion: ['', [Validators.required, Validators.minLength(5)]],
      fechaNacimiento: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      web: ['', [Validators.required, Validators.minLength(5)]],
      urlPerfil: ['', [Validators.required]],
      urlPortada: ['', [Validators.required]],
      pais: ['', [Validators.required]],
      provincia: ['', Validators.required],
      ciudad: ['', Validators.required],
      calle: ['', Validators.required],
      numero: ['', Validators.required]
    })

  }

  ngOnInit(): void {

    this.paises = this.porfolioService.getPais();
    this.provincias = this.porfolioService.getProvincia();


    this.porfolioService.getUsuario().subscribe(
      data => {
        catchError(this.handleError);
        this.datos = data[0];
        this.formu.controls['nombre'].setValue(data[0].nombre)
        this.formu.controls['telefono'].setValue(data[0].telefono)
        this.formu.controls['web'].setValue(data[0].web)
        this.formu.controls['email'].setValue(data[0].email)
        this.formu.controls['urlPerfil'].setValue(data[0].urlPerfil)
        this.formu.controls['urlPortada'].setValue(data[0].urlPortada)

      }
    )

  }


  //Obtengo el id del pais seleccionado
  obtenerValorPais() {

    this.idPais = parseInt(this.Pais['pais'].value);

  }

  //Obtengo el id de la privincia seleccionada
  obtenerValorProvincia() {
    this.idProvincia = parseInt(this.Provincia['provincia'].value);

  }

  //Metodo para ejecutar cuando se hace click la funcion que tre las ciudades de la base de dato
  iniciarCiudad() {
    this.ciudades = this.porfolioService.getCiudad(this.idProvincia);
  }

  //Obtengo el id de la ciudad seleccionada
  obtenerValorLocalidad() {
    this.idCiudad = parseInt(this.Ciudad['ciudad'].value);

  }


  onSubmit(evento: Event) {

    evento.preventDefault();

    console.log(this.formu.value)
    if (this.formu.valid) {
      alert('Infromacion Guardada Exitosamente')
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

  get Calle() {
    return this.formu.get('calle')
  }

}
