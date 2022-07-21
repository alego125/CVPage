import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { tap } from 'rxjs';
import { PorfolioServicesService } from 'src/app/servicios/porfolio-services.service';
import { Experiencia } from '../../formularios/Entidades/experiencia.entidad';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})
export class ExperienciaComponent implements OnInit {

  public datos!:any;
  public usuario!:any;
  role!:string;
  info = JSON.parse(sessionStorage['currentUser']);
  @Output() abrirExperiencia = new EventEmitter<boolean>();
  @Output() abrirEditarExperiencia = new EventEmitter<boolean>();
  @Output() informacionExperiencia = new EventEmitter<Experiencia>();

  constructor(
    private porfolioService : PorfolioServicesService
  ) { 
    this.info['authorities'].forEach((element:any)=>{
      if(element.authority === 'ROLE_ADMIN'){
        this.role = element.authority
      }
    });
   }

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
          setTimeout(()=>{
            location.reload()
          },2000)
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
    this.porfolioService.getUsuarioPorNombreUsuario(this.info.nombreUsuario).pipe(
      tap(
        user => {
          this.usuario = user;
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
