import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { LoginRegisterComponent } from './login-register/login-register.component';



@NgModule({
  declarations: [
    PaginaInicioComponent,
    LoginRegisterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InicioModule { }
