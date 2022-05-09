import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PorfolioServicesService } from 'src/app/servicios/porfolio-services.service';
import { Proyecto } from '../Entidades/proyecto.model';

@Component({
  selector: 'app-formulario-edicion-proyecto',
  templateUrl: './formulario-edicion-proyecto.component.html',
  styleUrls: ['./formulario-edicion-proyecto.component.scss']
})
export class FormularioEdicionProyectoComponent implements OnInit {
  formu: FormGroup;
  usuario!: any;
  proyectoData!: any;

  @Output() cerrarEdicionProyecFormulario = new EventEmitter<boolean>();
  @Input() infoProyecto:any;


  constructor(
    private formBuilder: FormBuilder,
    private portafolioService: PorfolioServicesService
  ) {
    //Seteo las validaciones del formulario
    this.formu = this.formBuilder.group({
      titulo: ['', [Validators.required, Validators.minLength(4)]],
      descripcion: ['', [Validators.required, Validators.maxLength(450)]],
      fechaInicio: ['', [Validators.required]],
      fechaFin: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    //Obtengo informacion del usuario de la base de datos
    this.portafolioService.getUsuario().subscribe(
      users => {
        users.forEach((element: any) => {
          //Cambiar el 1 por el id recuperado dinamiecamente
          if (element.id == 1) {
            this.usuario = element;
          }
        });
      }
    );
    //Cargamos al informacion al formulario
    this.formu.controls["titulo"].setValue(this.infoProyecto.tituloProyecto);
    this.formu.controls["descripcion"].setValue(this.infoProyecto.descripcion);
    this.formu.controls["fechaInicio"].setValue(this.infoProyecto.fechaInicio);
    this.formu.controls["fechaFin"].setValue(this.infoProyecto.fechaFin);
  }

  onSubmit(evento: Event) {

    //Detenemos la propagacion del evento submit por defecto
    evento.preventDefault();

    //Creamos el molde del proyecto
    let proyecto = new Proyecto(this.infoProyecto.idProyecto, this.formu.value.titulo, this.formu.value.descripcion, this.formu.value.fechaInicio, this.formu.value.fechaFin, this.usuario.id);

    console.log(proyecto.proyectoNuevo());



    if (this.formu.valid) {

      this.portafolioService.updateProyecto(proyecto).subscribe(
        response => {
          console.log(response);
          alert("Usuario Modificado Correctamente");
        },
        err => {
          console.log(err);
          alert("Error al actualizar!" + err);
        }
      )
      
      location.reload()
    } else {
      //Caso que no sea valido el formulario corremos todas las validaciones del formulario, esto lo hacemos con la funcion markAllAsTouched es decir es como si tocaramos o marcaramos todos los input para activar sus validaciones
      this.formu.markAllAsTouched();
    }

  }

  cerrar(): void {
    this.cerrarEdicionProyecFormulario.emit(false);
  }

  get Titulo() {
    return this.formu.get('titulo')
  }

  get Descripcion() {
    return this.formu.get('descripcion')
  }

  get FechaInicio() {
    return this.formu.get('fechaInicio')
  }

  get FechaFin() {
    return this.formu.get('fechaFin')
  }

}


