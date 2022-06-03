import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PorfolioServicesService } from 'src/app/servicios/porfolio-services.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.scss']
})
export class EducacionComponent implements OnInit {

  educacion:any;
  session = JSON.parse(sessionStorage['currentUser']);
  role!:string;
  @Output() abrirEducaFormulario = new EventEmitter<boolean>();
  @Output() abrireditarEducaFormulario = new EventEmitter<boolean>();
  @Output() editarEducaFormulario = new EventEmitter<boolean>();



  constructor(
    private porfolioService:PorfolioServicesService
  ) {
    this.session['authorities'].forEach((element:any)=>{
      if(element.authority === 'ROLE_ADMIN'){
        this.role = element.authority
      }
    });
   }

  ngOnInit(): void {
    this.porfolioService.getEducacion().subscribe(
      eduacion => {
        this.educacion = eduacion;
      },
      err => {
        console.log(err);
      }
    );        
  }

  eliminarEducacion(id:number){
    
    let respuesta = confirm("Confirma que desea eliminar educacion")

    if(respuesta){
      //Recuperamos el id lo pasamos a la funcion para eliminar la eduacion seleccionada
      this.porfolioService.deleteEducacion(id).subscribe(
        ()=>{
          alert("Educacion eliminada correctamente")
        },
        err => {
          console.log(err);
          alert("Error!!" + err)
        }
      );
    }
    location.reload();
  }

  editarEducacion(educacion:any){
    this.abrireditarEducaFormulario.emit(true);
    this.editarEducaFormulario.emit(educacion);
  }

  abrir():void{
    this.abrirEducaFormulario.emit(true);
  }

}
