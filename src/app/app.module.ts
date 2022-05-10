import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { PortadaComponent } from './components/portada/portada.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FormularioPresentacionComponent } from './formularios/formulario-presentacion/formulario-presentacion.component';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormularioExperienciaComponent } from './formularios/formulario-experiencia/formulario-experiencia.component';
import { UploadImagesComponent } from './formularios/upload-images/upload-images.component';
import { FormularioEducacionComponent } from './formularios/formulario-educacion/formulario-educacion.component';
import { FormularioSkillsComponent } from './formularios/formulario-skills/formulario-skills.component';
import { FormularioProyectosComponent } from './formularios/formulario-proyectos/formulario-proyectos.component';
import { FormularioRedesComponent } from './formularios/formulario-redes/formulario-redes.component';
import { FormularioEdicionProyectoComponent } from './formularios/formulario-edicion-proyecto/formulario-edicion-proyecto.component';
import { FormularioEdicionSkillComponent } from './formularios/formulario-edicion-skill/formulario-edicion-skill.component';
import { FormularioEdicionEducacionComponent } from './formularios/formulario-edicion-educacion/formulario-edicion-educacion.component';

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
    FormularioEdicionEducacionComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
