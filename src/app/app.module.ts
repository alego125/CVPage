import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
=======
>>>>>>> parent of 9ff35dd (Agregamos formulario para modificar portada y enlazamos servicio con json en server falso)

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { PortadaComponent } from './components/portada/portada.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { CursosComponent } from './components/cursos/cursos.component';
<<<<<<< HEAD
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';
import { FormularioPresentacionComponent } from './formularios/formulario-presentacion/formulario-presentacion.component';
import { UploadImagesComponent } from './formularios/upload-images/upload-images.component';
import { FormularioExperienciaComponent } from './formularios/formulario-experiencia/formulario-experiencia.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
=======
import { HttpClientModule } from '@angular/common/http';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component'
>>>>>>> parent of 9ff35dd (Agregamos formulario para modificar portada y enlazamos servicio con json en server falso)

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
<<<<<<< HEAD
    PersonalInformationComponent,
    FormularioPresentacionComponent,
    UploadImagesComponent,
    FormularioExperienciaComponent
=======
    PersonalInformationComponent
>>>>>>> parent of 9ff35dd (Agregamos formulario para modificar portada y enlazamos servicio con json en server falso)
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
<<<<<<< HEAD
    FormsModule,
    BrowserAnimationsModule,
=======
>>>>>>> parent of 9ff35dd (Agregamos formulario para modificar portada y enlazamos servicio con json en server falso)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
