import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonaComponent } from './Persona/persona.component';
import { CursoComponent } from './Curso/curso.component';
import { MostrarCursoComponent } from './mostrar-curso/mostrar-curso.component';
import { MostrarPersonaComponent } from './mostrar-persona/mostrar-persona.component';
import { ArraysComponent } from './Arrays/array.component';

const routes: Routes = [
  { path : 'persona-component', component: PersonaComponent},
  { path : 'curso-component', component: CursoComponent},
  { path : 'mostrar-curso-component', component: MostrarCursoComponent },
  { path : 'mostrar-persona-component', component: MostrarPersonaComponent },
  { path : '', loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule)},
  
  { path : 'persona-component/:id', component: PersonaComponent},
  { path : 'curso-component/:id', component: CursoComponent},
  { path: 'array', component: ArraysComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
