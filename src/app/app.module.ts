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
<<<<<<< HEAD
import { FormularioExperienciaComponent } from './formularios/formulario-experiencia/formulario-experiencia.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
=======
import { HttpClientModule } from '@angular/common/http';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component'
>>>>>>> parent of 9ff35dd (Agregamos formulario para modificar portada y enlazamos servicio con json en server falso)
=======
>>>>>>> parent of 3e3503b (viejo)

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
<<<<<<< HEAD
    UploadImagesComponent,
    FormularioExperienciaComponent
=======
    PersonalInformationComponent
>>>>>>> parent of 9ff35dd (Agregamos formulario para modificar portada y enlazamos servicio con json en server falso)
=======
    UploadImagesComponent
>>>>>>> parent of 3e3503b (viejo)
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
<<<<<<< HEAD
    FormsModule,
<<<<<<< HEAD
    BrowserAnimationsModule,
=======
>>>>>>> parent of 9ff35dd (Agregamos formulario para modificar portada y enlazamos servicio con json en server falso)
=======
>>>>>>> parent of 3e3503b (viejo)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
