import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { observable, Observable, tap } from 'rxjs';
import { Carrera } from 'src/app/modelos/porfolio-service.model';
import { PorfolioServicesService } from 'src/app/servicios/porfolio-services.service';

@Component({
  selector: 'app-formulario-educacion',
  templateUrl: './formulario-educacion.component.html',
  styleUrls: ['./formulario-educacion.component.scss']
})
export class FormularioEducacionComponent implements OnInit {

  valor!:any;
  imgEmpresa!:string;
  formu:FormGroup;
  modelo!:any;
  //Recibimos las universidades como un observable ya que en el template estamos usando async lo que hace es traer automaticamente la informacion de nuestro service
  universidades!:Observable<any>;
  carreras!:any;
  carreres:Carrera[] = [];
  idUni!:number;

  @Output() cerrarEducaFormulario = new EventEmitter<boolean>();

  constructor(
    private formBuild:FormBuilder,
    private porfolioService:PorfolioServicesService
    ) {
      //Armamos el form group con los elementos del formulario y su validator para la validacion
      this.formu = this.formBuild.group({
        imagen:['',[Validators.required]],
        nombreTitulo:['',[Validators.required, Validators.minLength(5)]],
        carrera:['',[Validators.required]],
        universidad:['',[Validators.required]],
        initialDate:['',[Validators.required]],
      });
      
    }
  
  ngOnInit(): void {
    //Una forma de traer la info del server o de la api es traer todo mediante la funcion y luego con un async en el template traducir todo 
    this.universidades = this.porfolioService.getUniversidades();
    //O la otra forma es mediante un pipe o un subscribe como se muestra a continuacion
    /* this.porfolioService.getUniversidades().pipe(
      tap(
        (uni:any) => {
          this.universidades = uni          
        }
      )
    ).subscribe() */

    //Traemos todas las carreras dela base de datos
    this.carreras = this.porfolioService.getCarreras().pipe(
      tap(
            carr => this.carreras = carr
        )
    ).subscribe();

    
  }
  
  //Funcion que se ejecuta al cambiar el select de universidad
  obtenerValor(){
    //Convertimos el value que recuperamos del option del select a entero ya que este valor viene en formato de string y cuando queramos realizar la comparacion con un number vamos a tener problemas de tipos con la igualdad estricta 
    //Mediante el get dedl optionUni le pasamos el elemento de control en este caso universidad que es con el nombre que lo declaramos en el formGroup, este debe ir entre corchetes y comillas para poder usarlo luego con value extraemos el valor que contiene es decir el valor que hayamos seleccionado en el select
    this.idUni = parseInt(this.optionUni['universidad'].value);
    //Limpio el array para que cada vez que vuelva a presionar el mismo se vuelva a cargar desde cero
    this.carreres = []
    //Recorro las carreras y cada elemento de tipo carrera si con
    this.carreras.forEach((element: Carrera) => {
      if(element.id_uni === this.idUni){
        //Metemos el elemento que coincida con la seleccion al array carreres que usaremos para mostrar en el segundo select
          this.carreres.push(element)
        }
    });   

  }

  
  onSubmit(evento:Event) {

    evento.preventDefault();

    if(this.formu.valid){
      alert('Informacion Guardada Exitosamente')
      location.reload();
    }else{
      this.formu.markAllAsTouched();
    }
  }
  
  onFileChanges(img:any):void{    
    this.imgEmpresa = img[0].base64;
  }

  cerrar():void{
    this.cerrarEducaFormulario.emit(false);
  }
  
  //Get que da control sobre los elementos del formulario declarados en el formGroup, mediante este se obtienen los valores de los elementos del formulario
  get optionUni(){
    return this.formu.controls;
  }

  get Imagen(){
    return this.formu.get('imagen');
  }

  get NombreTitulo(){
    return this.formu.get('nombreTitulo');
  }

  get Carrera(){
    return this.formu.get('carrera');
  }

  get Universidad(){
    return this.formu.get('universidad');
  }

  get InitialDate(){
    return this.formu.get('initialDate');
  }

}
