import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { observable, Observable, tap } from 'rxjs';
import { Carrera } from 'src/app/modelos/porfolio-service.model';
import { FirebaseService } from 'src/app/servicios/firebase.service';
import { PorfolioServicesService } from 'src/app/servicios/porfolio-services.service';
import { Educacion } from '../Entidades/educacion.entidad';
import { Institucion } from '../Entidades/institucion.entidad';
import { Usuario } from '../Entidades/usuario.entidad';

@Component({
  selector: 'app-formulario-educacion',
  templateUrl: './formulario-educacion.component.html',
  styleUrls: ['./formulario-educacion.component.scss']
})
export class FormularioEducacionComponent implements OnInit {

  valor!:any;
  cargaArchivo:boolean = false;
  imgEmpresa!:string;
  formu:FormGroup;
  modelo!:any;
  //Recibimos las universidades como un observable ya que en el template estamos usando async lo que hace es traer automaticamente la informacion de nuestro service
  instituciones!:Observable<any[]>;
  educacion!:any;
  imagenUrl:any = null;
  // carreras!:any;
  // carreres:Carrera[] = [];
  idInstitucion!:number;
  institucion!:Institucion;
  userId!:number;
  usuario!:any;

  @Output() cerrarEducaFormulario = new EventEmitter<boolean>();

  constructor(
    private porfolioService:PorfolioServicesService,
    private formBuild:FormBuilder,
    private fireService:FirebaseService
    ) {
      //Armamos el form group con los elementos del formulario y su validator para la validacion
      this.formu = this.formBuild.group({
        imagen:['', [Validators.required]],
        nombreTitulo:['',[Validators.required, Validators.minLength(5)]],
        universidad:['',[Validators.required]],
        initialDate:['',[Validators.required]],
        finalDate:['']
      });
      console.log("ImagenUrl: " + this.imagenUrl);
    }
  
  ngOnInit(): void {
    //Una forma de traer la info del server o de la api es traer todo mediante la funcion y luego con un async en el template traducir todo 
    this.instituciones = this.porfolioService.getInstitucion()      
    
    let info = JSON.parse(sessionStorage['currentUser']);
    this.porfolioService.getUsuarioPorNombreUsuario(info.nombreUsuario).subscribe(
      user => {
        this.userId = user.id;
        this.usuario = user;
      }
    );

    
  }
  
  //Funcion que se ejecuta al cambiar el select de universidad
  obtenerValor(){
    //Convertimos el value que recuperamos del option del select a entero ya que este valor viene en formato de string y cuando queramos realizar la comparacion con un number vamos a tener problemas de tipos con la igualdad estricta 
    //Mediante el get dedl optionUni le pasamos el elemento de control en este caso universidad que es con el nombre que lo declaramos en el formGroup, este debe ir entre corchetes y comillas para poder usarlo luego con value extraemos el valor que contiene es decir el valor que hayamos seleccionado en el select
    this.idInstitucion = parseInt(this.optionUni['universidad'].value);
    this.porfolioService.getInstitucionById(this.idInstitucion).subscribe(
      institution => {
        this.institucion = new Institucion(institution.idInstitucion, institution.nombreInstitucion);
      }
    )
     

  }
    
  onFileChanges(event:any):void{    
    //Bandera para mostrar el loader de carga
    this.cargaArchivo = true;
    let archivo = event.target.files;
    let reader = new FileReader();
    let numeroRandom = Math.floor((Math.random() * (1000000 - 0 + 1)));
    reader.readAsDataURL(archivo[0]);
    reader.onloadend = () => {
      this.fireService.subirImagen(`Imagen_Institucion ${numeroRandom}`, reader.result, this.usuario.name).then(
        imagenUrl => {
          //Guardamos la url de la imagen dentro de la base de datos
          this.imagenUrl = imagenUrl;
        });
    }
  }
  
  onSubmit(evento:Event) {

    evento.preventDefault();

    let nuevoUsuario = new Usuario(this.usuario.id, this.usuario.name, this.usuario.nombre, this.usuario.apellido, this.usuario.fechaNacimiento, this.usuario.web, this.usuario.telefono, this.usuario.email, this.usuario.presentacion, this.usuario.urlPortada, this.usuario.urlPerfil, this.usuario.domicilio);

    let nuevaEducacion = new Educacion(1, this.formu.controls["nombreTitulo"].value,this.imagenUrl, this.formu.controls["initialDate"].value, this.formu.controls["finalDate"].value, nuevoUsuario.usuarioObject(), this.institucion);
    
    console.log(nuevaEducacion.educacionNueva());

    if(this.formu.valid){
      
      if(this.imagenUrl != null){
        this.porfolioService.createEducacion(nuevaEducacion.educacionNueva()).subscribe(
          response => {
            console.log(response);
            alert("Educacion creada")
          },
          err => {
            console.log("Error!!" + err);
            alert("Ocurrio un error al caragar" + err);
          }
        );
      }
      setTimeout(()=>{
        location.reload()
      },2000)
    }else{
      this.formu.markAllAsTouched();
    }
  }
  cerrar():void{
    this.cerrarEducaFormulario.emit(false);
  }
  
  //Get que da control sobre los elementos del formulario declarados en el formGroup, mediante este se obtienen los valores de los elementos del formulario
  get optionUni(){
    return this.formu.controls;
  }

  get Imagen(){
    return this.formu.get('imagen');
  }

  get NombreTitulo(){
    return this.formu.get('nombreTitulo');
  }

  get Universidad(){
    return this.formu.get('universidad');
  }

  get InitialDate(){
    return this.formu.get('initialDate');
  }

}
