import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { tap } from 'rxjs';
import { Experiencia } from 'src/app/formularios/Entidades/experiencia.entidad';
import { PorfolioServicesService } from 'src/app/servicios/porfolio-services.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})
export class ExperienciaComponent implements OnInit {

  public datos!:any;
  public usuario!:any;
  @Output() abrirExperiencia = new EventEmitter<boolean>();
  @Output() abrirEditarExperiencia = new EventEmitter<boolean>();
  @Output() informacionExperiencia = new EventEmitter<Experiencia>();

  constructor(
    private porfolioService : PorfolioServicesService
  ) {  }

  ngOnInit(): void {
    this.getExperience();
    this.getUser();
  }

  eliminarElimento(id:number){
    let confirmacion = confirm("Confirmar eliminar?")
    
    if(confirmacion){
      this.porfolioService.deleteExperiencia(id).subscribe(
        ()=>{
          alert("Experiencia eliminada")
          location.reload();
        },err=>{
          console.log(err);
        }
      );
    }

  }

  public editarExperiencia(experiencia:Experiencia):void{
    this.abrirEditarExperiencia.emit(true);
    this.informacionExperiencia.emit(experiencia);
  }

  private getUser():void{
    this.porfolioService.getUsuario().pipe(
      tap(
        user => {
          this.usuario = user[0];
          console.log(this.datos)
        }
      )
    ).subscribe()
  }

  private getExperience():void{
    this.porfolioService.getExperience().pipe(
      tap(
        data => {
          this.datos = data;
          console.log(this.datos)
        }
      )
    ).subscribe()
  }

  abrir():void{
    this.abrirExperiencia.emit(true);
  }

}
