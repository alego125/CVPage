import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormulariosModule } from './formularios/formularios.module';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormulariosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
