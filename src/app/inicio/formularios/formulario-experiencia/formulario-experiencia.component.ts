import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs';
import { FirebaseService } from 'src/app/servicios/firebase.service';
import { PorfolioServicesService } from 'src/app/servicios/porfolio-services.service';
import { Experiencia } from '../Entidades/experiencia.entidad';
import { Usuario } from '../Entidades/usuario.entidad';

@Component({
  selector: 'app-formulario-experiencia',
  templateUrl: './formulario-experiencia.component.html',
  styleUrls: ['./formulario-experiencia.component.scss']
})
export class FormularioExperienciaComponent implements OnInit {

  valor!:any;
  imgEmpresa!:string;
  formu:FormGroup;
  cargaArchivo:boolean = false;
  imagenUrl:any = null;
  userId!:number;
  usuario!:any;
  
  @Output() cerrarExperiencia = new EventEmitter<boolean>();
  

  constructor(
    private formBuild:FormBuilder,
    private porfolioService:PorfolioServicesService,
    private fireService:FirebaseService
  ) {
    this.formu = this.formBuild.group({
      nombreEmpresa:['',[Validators.required, Validators.minLength(5)]],
      imagen:['',[Validators.required]],
      description:['',[Validators.required, Validators.maxLength(250)]],
      initialDate:['',[Validators.required]],
      finalDate:['']
    });
  }
  
  ngOnInit(): void {
    
    let info = JSON.parse(sessionStorage['currentUser']);
    this.porfolioService.getUsuarioPorNombreUsuario(info.nombreUsuario).pipe(
      tap(
        user => {
          this.usuario = user;
          this.userId = user.id;
        }
      )
    ).subscribe();
    

    console.log(this.imagenUrl);

  }
  
  
  onFileChanges(event:any):void{    
    //Bandera para mostrar el loader de carga
    this.cargaArchivo = true;
    let archivo = event.target.files;
    let reader = new FileReader();
    let numeroRandom = Math.floor((Math.random() * (1000000 - 0 + 1)));
    reader.readAsDataURL(archivo[0]);    
    reader.onloadend = () => {
      this.fireService.subirImagen(`Imagen_empresa ${numeroRandom} `, reader.result, this.usuario.nombre).then(
        imagenUrl => {
          this.imagenUrl = imagenUrl;
        });
      }
    }

    onSubmit(evento:Event){

      evento.preventDefault();
  
      let nuevoUsuario = new Usuario(this.usuario.id, this.usuario.name, this.usuario.nombre, this.usuario.apellido, this.usuario.fechaNacimiento, this.usuario.web, this.usuario.telefono, this.usuario.email, this.usuario.presentacion, this.usuario.urlPortada, this.usuario.urlPerfil, this.usuario.domicilio);

      let nuevaExperiencia = new Experiencia(1,this.formu.controls["nombreEmpresa"].value,this.formu.controls["description"].value,this.formu.controls["initialDate"].value,this.formu.controls["finalDate"].value,this.imagenUrl,nuevoUsuario.usuarioObject());    
      
      console.log(nuevaExperiencia.crearExperiencia());
      console.log(this.formu.valid);

      if(this.formu.valid){
        console.log("Entrooooo!!!!");
        this.porfolioService.createExperiencia(nuevaExperiencia.crearExperiencia()).subscribe(
            response => {
              alert('Informacion Guardada Exitosamente');
              console.log(response);
            },err => {
              console.log(err);
            }     
          );
          setTimeout(()=>{
            location.reload()
          },2000)
      }else{
        this.formu.markAllAsTouched();
      }
    }
    
  cerrar():void{
    this.cerrarExperiencia.emit(false);
  }

  get Imagen(){
    return this.formu.get('imagen')
  }

  get NombreEmpresa(){
    return this.formu.get('nombreEmpresa')
  }

  get Description(){
    return this.formu.get('description')
  }

  get InitialDate(){
    return this.formu.get('initialDate')
  }

}
