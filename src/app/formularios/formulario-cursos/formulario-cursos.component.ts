import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-cursos',
  templateUrl: './formulario-cursos.component.html',
  styleUrls: ['./formulario-cursos.component.scss']
})
export class FormularioCursosComponent implements OnInit {

  formu!:FormGroup;

  @Output() cerrarCursoFormulario = new EventEmitter<boolean>();

  constructor(private formBuilder:FormBuilder) { 
    this.formu = this.formBuilder.group({
      name: [ '', [Validators.required, Validators.minLength(4)] ],
      institution:['',[Validators.required, Validators.minLength(5)]],
      fechaInicio: [ '', [Validators.required] ],
    })
  }

  ngOnInit(): void {
  }

  cerrar():void{
    this.cerrarCursoFormulario.emit(false);
  }

  get Name(){
    return this.formu.get('name');
  }

  get Institution(){
    return this.formu.get('institution');
  }

  get FechaInicio(){
    return this.formu.get('fechaInicio');
  }

  onSubmit(evento:Event){
    evento.preventDefault();

    if(this.formu.valid){
      alert('Informacion Guardada Exitosamente')
      location.reload();
    }else{
      this.formu.markAllAsTouched();
    }
  }

}
