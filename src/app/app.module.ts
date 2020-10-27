import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonaComponent } from './Persona/persona.component';
import { CursoComponent } from './Curso/curso.component';

import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';

import {MatCardModule} from '@angular/material/card';
import{ FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PersonaService } from './servicios/persona.service';
import { CursoService } from './servicios/curso.service';
import { MostrarCursoComponent } from './mostrar-curso/mostrar-curso.component';
import { MostrarPersonaComponent } from './mostrar-persona/mostrar-persona.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import {environment} from '../environments/environment';
import { ArraysComponent } from './Arrays/array.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    MostrarCursoComponent,
    MostrarPersonaComponent,
    ArraysComponent,
    CursoComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatMenuModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  
  ],
  providers: [PersonaService, CursoService],
  bootstrap: [AppComponent]
})
export class AppModule { }