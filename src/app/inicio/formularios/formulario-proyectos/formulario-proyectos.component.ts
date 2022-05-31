import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PorfolioServicesService } from 'src/app/servicios/porfolio-services.service';
import { Proyecto } from '../Entidades/proyecto.model';

@Component({
  selector: 'app-formulario-proyectos',
  templateUrl: './formulario-proyectos.component.html',
  styleUrls: ['./formulario-proyectos.component.scss']
})
export class FormularioProyectosComponent implements OnInit {

  formu: FormGroup;
  usuario!: any;
  proyectoData!: any;

  @Output() cerrarProyecFormulario = new EventEmitter<boolean>();

  constructor(
    private formBuilder: FormBuilder,
    private portafolioService: PorfolioServicesService
  ) {
    this.formu = this.formBuilder.group({
      titulo: ['', [Validators.required, Validators.minLength(4)]],
      descripcion: ['', [Validators.required, Validators.maxLength(450)]],
      fechaInicio: ['', [Validators.required]],
      fechaFin: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    //Traemos el usuario actual de la base de datos
    let info = JSON.parse(sessionStorage['currentUser']);
    this.portafolioService.getUsuarioPorNombreUsuario(info.nombreUsuario).subscribe(
      users => {
            this.usuario = users;
        // users.forEach((element: any) => {
          //   //Cambiar el 1 por el id recuperado dinamiecamente
          //   if (element.id == 1) {
          //     this.usuario = element;
        //   }
        // });
      }
    );
  }

  onSubmit(evento: Event) {

    //Detenemos la propagacion del evento submit por defecto
    evento.preventDefault();

    //Creamos el modelo del proyecto a crear
    let proyecto = new Proyecto(1, this.formu.value.titulo, this.formu.value.descripcion, this.formu.value.fechaInicio, this.formu.value.fechaFin, this.usuario.id);

    //Si el formulario es valido entonces guardamos

    if (this.formu.valid) {
      //Aca ahora debemos recargar nuevamente la pagina principal para mostrar la informacion
      this.portafolioService.createProyecto(proyecto.proyectoNuevo()).subscribe(
        dato => {
          console.log(dato);
          alert('Informacion Guardada Exitosamente')
        }, error => {
          console.log(error);
        }
      );
      location.reload()
    } else {
      //Caso que no sea valido el formulario corremos todas las validaciones del formulario, esto lo hacemos con la funcion markAllAsTouched es decir es como si tocaramos o marcaramos todos los input para activar sus validaciones
      this.formu.markAllAsTouched();
    }

  }

  cerrar(): void {
    this.cerrarProyecFormulario.emit(false);
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
