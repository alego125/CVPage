import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PorfolioServicesService } from 'src/app/servicios/porfolio-services.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {

  datos: any = [];
  usuario:any;
  info = JSON.parse(sessionStorage['currentUser']);

  @Output() abrirProyecFormulario = new EventEmitter<boolean>();
  @Output() abrirInfoEditar = new EventEmitter<boolean>();
  @Output() editarInfoEditar = new EventEmitter<any>();

  constructor(
    private porfolioService: PorfolioServicesService
  ) {  }

  ngOnInit(): void {
    let info = JSON.parse(sessionStorage['currentUser']);
    this.porfolioService.getUsuarioPorNombreUsuario(info.nombreUsuario).subscribe(
      data => {
        this.usuario = data;
      }
    );
    this.porfolioService.getProyectos().subscribe(
      data => {
        // this.datos = data;
        setTimeout(()=>{
          data.forEach((el:any)=>{
            // console.log(el['idUser']);
            // console.log(this.usuario['id']);
            if(el['idUser'] === this.usuario['id']){
              this.datos.push(el);
            }
          })
        },2000)
      }

    );
  }

  eliminarProyecto(proyecto: any) {

    //Preguntamos al usuario para que confirme eliminacion
    const confirmacion = confirm("Confirmar eliminacion");

    //Si confirmo ejecutamos eliminacion
    if(confirmacion){

      this.porfolioService.deleteProyecto(proyecto.idProyecto).subscribe(
        projDel => {
          console.log(projDel);
          alert("Proyecto Eliminado con exito");
        },
        err => {
          console.log(err);
          alert("Error! " + err);
        }
      );

      location.reload();

    }else{
      location.reload();
    }
    
  }

  abrir(): void {
    this.abrirProyecFormulario.emit(true);
  }

  editar(proyecto:any):void{
    //Info para abrir el formulario 
    this.abrirInfoEditar.emit(true);
    //Envio informacion del proyecto que queremos editar
    this.editarInfoEditar.emit(proyecto);
  }

}
