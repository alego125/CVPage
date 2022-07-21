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

  public datos!: any;
  public formu: FormGroup;
  @Output() cerrarVentana = new EventEmitter<any>();

  constructor(
    private porfolioService: PorfolioServicesService,
    private formBuilder: FormBuilder
  ) {
    this.formu = this.formBuilder.group({
      presentacion: ['', [Validators.required, Validators.maxLength(500)]]
    })
  }

  ngOnInit(): void {

    let info = JSON.parse(sessionStorage['currentUser']);
    this.porfolioService.getUsuarioPorNombreUsuario(info.nombreUsuario).subscribe(
      data => {
        console.log(data);
        this.datos = data;
      }
    );



    setTimeout(() => {
      this.formu.controls['presentacion'].setValue(this.datos.presentacion);
      console.log(this.datos);
    }, 1000)
  }


  onSubmit(evento: Event) {

    evento.preventDefault();

    if (this.formu.valid) {
      this.porfolioService.actualizarGuardarPresentacion(this.datos.id, this.formu.controls['presentacion'].value).subscribe(
        () => {
          alert("Informacion Guardada")
        }
      );
      setTimeout(()=>{
        location.reload()
      },2000)
    } else {
      this.formu.markAllAsTouched();
    }

  }

  cerrar(): void {
    this.cerrarVentana.emit(false);
  }


  get Presentacion() {
    return this.formu.get('presentacion')
  }
}
