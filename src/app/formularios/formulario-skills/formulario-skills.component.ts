import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-skills',
  templateUrl: './formulario-skills.component.html',
  styleUrls: ['./formulario-skills.component.scss']
})
export class FormularioSkillsComponent implements OnInit {

  formu!:FormGroup;

  valor!:any;
  
  @Output() cerrarSkillFormulario = new EventEmitter<boolean>();

  constructor(
    private formBuilder:FormBuilder
  ) {
    this.formu = this.formBuilder.group({
      habilidad:['',[Validators.required,Validators.minLength(4)]],
      porcentaje:['',[Validators.required]]
    })
  }
  
  ngOnInit(): void {
    
  }

  onSubmit(evento:Event){

    evento.preventDefault()

    if(this.formu.valid){
      alert('Infomracion Guardada Exitosamente');
      location.reload();
    }else{
      this.formu.markAllAsTouched();
    }

  }
  
  cerrar():void{
    this.cerrarSkillFormulario.emit(false);
  }

  get Habilidad(){
    return this.formu.get('habilidad')
  }

  get Porcentaje(){
    return this.formu.get('porcentaje')
  }

}
