import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PorfolioServicesService } from 'src/app/servicios/porfolio-services.service';
import { Red } from '../Entidades/red.entidad';

@Component({
  selector: 'app-formulario-redes',
  templateUrl: './formulario-redes.component.html',
  styleUrls: ['./formulario-redes.component.scss']
})
export class FormularioRedesComponent implements OnInit {

  formu!:FormGroup;
  nombreRedes!:any;
  idUser!:number;
  datos!:any;
  redes!:any;
  usuario!:any;
  linkedin!:any;
  facebook!:any;
  instagram!:any;
  github!:any;

  @Output() cerrarRedesFormulario = new EventEmitter<boolean>();

  constructor(
    private porfolioService:PorfolioServicesService,
    private formBuilder: FormBuilder
  ) { 
    this.formu = this.formBuilder.group({
      instagram: [''],
      linkedin:[''],
      facebook:[''],
      github:[''],
    })
   }

  ngOnInit(): void {

    this.porfolioService.getUsuario().subscribe(
      user => {
        this.usuario = user[0];
      }
    );
    
    this.porfolioService.getRedes().subscribe(
      redes => {
        this.datos = redes;
        console.log(redes);
        //Recorremos las redes y verificamos el usuario coincida con el usuario actual, luego corroboramos el tipo de red para colocar cada una en su correspondiente casillero
        redes.forEach((el:any)=>{
          if(el.idUser === this.usuario.id){
            if(el.nombreRed.idNombreRedes == 1){
              this.linkedin = el;
            }else if(el.nombreRed.idNombreRedes == 2){
              this.facebook = el;
            }else if(el.nombreRed.idNombreRedes == 3){
              this.instagram = el;
            }else if(el.nombreRed.idNombreRedes == 4){
              this.github = el;
            }
          }
        })

      }
    );    
    this.porfolioService.getNombreRed().subscribe(
      red => {
        this.redes = red;
      }
    );

    setTimeout(()=>{
      this.datos.forEach((element:any) => {
        console.log(element.nombreRed.nombreRed);
      });
      console.log(this.redes);
      console.log(this.linkedin, this.facebook, this.github, this.instagram);
      //Seteamos los valores en cada uno de los inputs
      this.formu.controls['instagram'].setValue(this.instagram.link);
      this.formu.controls['facebook'].setValue(this.facebook.link);
      this.formu.controls['linkedin'].setValue(this.linkedin.link);
      this.formu.controls['github'].setValue(this.github.link);
    },2000)
    
  }

  onSubmit(event:Event){
    
    event.preventDefault();

    let redInstagram!:Red;
    let redFacebook!:Red;
    let redLinkedin!:Red;
    let redGithub!:Red;

    //Verificamos que el casillero de input este vacio o no para segun sea se haga un update o un create sobre la base de datos

    if(this.instagram.link == undefined){
      redInstagram = new Red(1,this.formu.controls['instagram'].value,this.usuario.id,this.redes[2]);
      this.porfolioService.createRed(redInstagram.crearNombreRed()).subscribe(
        response=>{
          console.log(response);
          alert("Ingreso exitoso");
        },err=>{
          console.log(err);
        }
      );
    }else{
      redInstagram = new Red(this.instagram.idRed,this.formu.controls['instagram'].value,this.usuario.id,this.redes[2]);      
      this.porfolioService.updateRed(redInstagram.actualizarNombreRed()).subscribe(
        response=>{
          console.log(response);
          alert("Ingreso fallido vuelva a intentar");
        },err=>{
          console.log(err);
        }
      );
    }
    if(this.facebook.link == undefined){
      redFacebook = new Red(1,this.formu.controls['facebook'].value,this.usuario.id,this.redes[1]);
      this.porfolioService.createRed(redFacebook.crearNombreRed()).subscribe(
        response=>{
          console.log(response);
          alert("Ingreso exitoso");
        },err=>{
          console.log(err);
        }
      );
    }else{
      redFacebook = new Red(this.facebook.idRed,this.formu.controls['facebook'].value,this.usuario.id,this.redes[1]);      
      this.porfolioService.updateRed(redFacebook.actualizarNombreRed()).subscribe(
        response=>{
          console.log(response);
          alert("Ingreso fallido vuelva a intentar");
        },err=>{
          console.log(err);
        }
      );
    }
    if(this.linkedin.link == undefined){
      redLinkedin = new Red(1,this.formu.controls['linkedin'].value,this.usuario.id,this.redes[0]);
      this.porfolioService.createRed(redLinkedin.crearNombreRed()).subscribe(
        response=>{
          console.log(response);
          alert("Ingreso exitoso");
        },err=>{
          console.log(err);
        }
      );
    }else{
      redLinkedin = new Red(this.linkedin.idRed,this.formu.controls['linkedin'].value,this.usuario.id,this.redes[0]);      
      this.porfolioService.updateRed(redLinkedin.actualizarNombreRed()).subscribe(
        response=>{
          console.log(response);
          alert("Ingreso fallido vuelva a intentar");
        },err=>{
          console.log(err);
        }
      );
    }
    if(this.github.link == undefined){
      redGithub = new Red(1,this.formu.controls['github'].value,this.usuario.id,this.redes[3]);
      this.porfolioService.createRed(redGithub.crearNombreRed()).subscribe(
        response=>{
          console.log(response);
          alert("Ingreso exitoso");
        },err=>{
          console.log(err);
        }
      );
    }else{
      redGithub = new Red(this.github.idRed,this.formu.controls['github'].value,this.usuario.id,this.redes[3]);      
      this.porfolioService.updateRed(redGithub.actualizarNombreRed()).subscribe(
        response=>{
          console.log(response);
          alert("Ingreso fallido vuelva a intentar");
        },err=>{
          console.log(err);
        }
      );
    }    

  }

  cerrar():void{
    this.cerrarRedesFormulario.emit(false);
  }

}
