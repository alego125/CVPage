import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';

import { AppComponent } from './app.component';
import { HeaderComponent } from './inicio/components/header/header.component';
import { PresentacionComponent } from './inicio/components/presentacion/presentacion.component';
import { PortadaComponent } from './inicio/components/portada/portada.component';
import { ExperienciaComponent } from './inicio/components/experiencia/experiencia.component';
import { EducacionComponent } from './inicio/components/educacion/educacion.component';
import { SkillsComponent } from './inicio/components/skills/skills.component';
import { ProyectosComponent } from './inicio/components/proyectos/proyectos.component';
import { PersonalInformationComponent } from './inicio/components/personal-information/personal-information.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormularioEdicionEducacionComponent } from './inicio/formularios/formulario-edicion-educacion/formulario-edicion-educacion.component';
import { FormularioEdicionExperienciaComponent } from './inicio/formularios/formulario-edicion-experiencia/formulario-edicion-experiencia.component';
import { FormularioEdicionProyectoComponent } from './inicio/formularios/formulario-edicion-proyecto/formulario-edicion-proyecto.component';
import { FormularioEdicionSkillComponent } from './inicio/formularios/formulario-edicion-skill/formulario-edicion-skill.component';
import { FormularioEducacionComponent } from './inicio/formularios/formulario-educacion/formulario-educacion.component';
import { FormularioExperienciaComponent } from './inicio/formularios/formulario-experiencia/formulario-experiencia.component';
import { FormularioPresentacionComponent } from './inicio/formularios/formulario-presentacion/formulario-presentacion.component';
import { FormularioProyectosComponent } from './inicio/formularios/formulario-proyectos/formulario-proyectos.component';
import { FormularioRedesComponent } from './inicio/formularios/formulario-redes/formulario-redes.component';
import { FormularioSkillsComponent } from './inicio/formularios/formulario-skills/formulario-skills.component';
import { UploadImagesComponent } from './inicio/formularios/upload-images/upload-images.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { PorfolioServicesService } from './servicios/porfolio-services.service';
import { InterceptorService } from './servicios/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PresentacionComponent,
    PortadaComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    PersonalInformationComponent,
    FormularioPresentacionComponent,
    PersonalInformationComponent,
    UploadImagesComponent,
    FormularioExperienciaComponent,
    UploadImagesComponent,
    FormularioEducacionComponent,
    FormularioSkillsComponent,
    FormularioProyectosComponent,
    FormularioRedesComponent,
    FormularioEdicionProyectoComponent,
    FormularioEdicionSkillComponent,
    FormularioEdicionEducacionComponent,
    FormularioEdicionExperienciaComponent,
    PortfolioComponent,
    PaginaInicioComponent,
    LoginRegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AlifeFileToBase64Module,
    ReactiveFormsModule
  ],
  providers: [PorfolioServicesService,{provide:HTTP_INTERCEPTORS, useClass:InterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
