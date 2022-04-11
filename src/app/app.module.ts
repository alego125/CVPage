import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { PortadaComponent } from './components/portada/portada.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';
import { FormularioPresentacionComponent } from './formularios/formulario-presentacion/formulario-presentacion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormularioExperienciaComponent } from './formularios/formulario-experiencia/formulario-experiencia.component';
import { UploadImagesComponent } from './formularios/upload-images/upload-images.component';
import { FormularioEducacionComponent } from './formularios/formulario-educacion/formulario-educacion.component';
import { FormularioSkillsComponent } from './formularios/formulario-skills/formulario-skills.component';
import { FormularioProyectosComponent } from './formularios/formulario-proyectos/formulario-proyectos.component';
import { FormularioCursosComponent } from './formularios/formulario-cursos/formulario-cursos.component';
import { FormularioRedesComponent } from './formularios/formulario-redes/formulario-redes.component';

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
    CursosComponent,
    PersonalInformationComponent,
    FormularioPresentacionComponent,
    FormularioExperienciaComponent,
    UploadImagesComponent,
    FormularioEducacionComponent,
    FormularioSkillsComponent,
    FormularioProyectosComponent,
    FormularioCursosComponent,
    FormularioRedesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AlifeFileToBase64Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
