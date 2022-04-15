import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-proyectos',
  templateUrl: './formulario-proyectos.component.html',
  styleUrls: ['./formulario-proyectos.component.scss']
})
export class FormularioProyectosComponent implements OnInit {

  formu:FormGroup;

  @Output() cerrarProyecFormulario = new EventEmitter<boolean>();

  constructor(
    private formBuilder:FormBuilder,
    ) { 
    this.formu = this.formBuilder.group({
      titulo: [ '', [Validators.required, Validators.minLength(4)] ],
      descripcion: [ '', [Validators.required, Validators.maxLength(450)] ],
      fechaInicio: [ '', [Validators.required] ]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(evento:Event){

    //Detenemos la propagacion del evento submit por defecto
    evento.preventDefault();

    if(this.formu.valid){
      alert('Informacion Guardada Exitosamente')
      //Aca ahora debemos recargar nuevamente la pagina principal para mostrar la informacion
      location.reload()
    }else{
      //Caso que no sea valido el formulario corremos todas las validaciones del formulario, esto lo hacemos con la funcion markAllAsTouched es decir es como si tocaramos o marcaramos todos los input para activar sus validaciones
      this.formu.markAllAsTouched();      
    }

  }

  cerrar():void{
    this.cerrarProyecFormulario.emit(false);
  }

  get Titulo(){
    return this.formu.get('titulo')
  }

  get Descripcion(){
    return this.formu.get('descripcion')
  }

  get FechaInicio(){
    return this.formu.get('fechaInicio')
  }
}
