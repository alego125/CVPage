import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs';
import { FirebaseService } from 'src/app/servicios/firebase.service';
import { PorfolioServicesService } from 'src/app/servicios/porfolio-services.service';
import { Experiencia } from '../Entidades/experiencia.entidad';
import { Usuario } from '../Entidades/usuario.entidad';

@Component({
  selector: 'app-formulario-edicion-experiencia',
  templateUrl: './formulario-edicion-experiencia.component.html',
  styleUrls: ['./formulario-edicion-experiencia.component.scss']
})
export class FormularioEdicionExperienciaComponent implements OnInit {

  valor!:any;
  imgEmpresa!:string;
  formu:FormGroup;
  cargaArchivo:boolean = false;
  imagenUrl:any = null;
  userId!:number;
  usuario!:any;
  
  @Output() cerrarEditarExperiencia = new EventEmitter<boolean>();
  @Input() infoExperiencia!:any;

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

    console.log(this.infoExperiencia);

    this.formu.controls["nombreEmpresa"].setValue(this.infoExperiencia.nombreEmpresa);
    this.formu.controls["imagen"].setValue(this.infoExperiencia.urlImagen);
    this.formu.controls["description"].setValue(this.infoExperiencia.descripcionTareas);
    this.formu.controls["initialDate"].setValue(this.infoExperiencia.fechaInicio);
    this.formu.controls["finalDate"].setValue(this.infoExperiencia.fechaFin);
    

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
          this.formu.controls["imagen"].setValue(imagenUrl);
        });
      }
    }

    onSubmit(evento:Event){

      evento.preventDefault();
  
      let nuevoUsuario = new Usuario(this.usuario.id, this.usuario.name, this.usuario.nombre, this.usuario.apellido, this.usuario.fechaNacimiento, this.usuario.web, this.usuario.telefono, this.usuario.email, this.usuario.presentacion, this.usuario.urlPortada, this.usuario.urlPerfil, this.usuario.domicilio);

      let updateExperiencia = new Experiencia(this.infoExperiencia.idExperiencia,this.formu.controls["nombreEmpresa"].value,this.formu.controls["description"].value,this.formu.controls["initialDate"].value,this.formu.controls["finalDate"].value,this.formu.controls["imagen"].value,nuevoUsuario.usuarioObject());    
      
      console.log(updateExperiencia.editarExperiencia());
      console.log(this.formu.valid);

      if(this.formu.valid){
        this.porfolioService.updateExperiencia(updateExperiencia.editarExperiencia()).subscribe(
            response => {
              alert('Informacion Actualizada Exitosamente');
              console.log(response);
            },err => {
              console.log(err);
            }     
          );
        location.reload()
      }else{
        this.formu.markAllAsTouched();
      }
    }
    
  cerrar():void{
    this.cerrarEditarExperiencia.emit(false);
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
