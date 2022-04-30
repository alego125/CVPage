import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs';
import { PorfolioServicesService } from 'src/app/servicios/porfolio-services.service';

@Component({
  selector: 'app-formulario-presentacion',
  templateUrl: './formulario-presentacion.component.html',
  styleUrls: ['./formulario-presentacion.component.scss']
})
export class FormularioPresentacionComponent implements OnInit {

  public info!: string;
  public formu: FormGroup;
  @Output() cerrarVentana = new EventEmitter<any>();

  constructor(
    private porfolioService: PorfolioServicesService,
    private formBuilder: FormBuilder
  ) {
    this.formu = formBuilder.group({
      presentacion: ['', [Validators.required, Validators.maxLength(500)]]
    })
  }

  ngOnInit(): void {
    this.getUser();
  }

  get Presentacion() {
    return this.formu.get('presentacion')
  }

  onSubmit(evento: Event) {
  
    evento.preventDefault();
    
    if(this.formu.valid){
      alert('Informacion Guardada Correctamente')
      location.reload();
    }else{
      this.formu.markAllAsTouched();
    }

  }

  getUser(): void {
    this.porfolioService.getUsuario().pipe(
      tap(
        data => {
          this.info = data.presentacion;
        }
      )
    ).subscribe()
  }

  cerrar(): void {
    this.cerrarVentana.emit(false);
  }


}
