import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CdirectionComponent } from './cdirection/cdirection.component';
import { CaboutComponent } from './cabout/cabout.component';
import { ClistCoursesComponent } from './clist-courses/clist-courses.component';
import {CformComponent} from './cform/cform.component';
import { CcontadorComponent } from './ccontador/ccontador.component';


const routes: Routes = [
  {path: "", component: CcontadorComponent},
  {path: 'about', component: CaboutComponent},
  {path: 'list-courses', component: ClistCoursesComponent},
  {path: 'direction', component: CdirectionComponent},
  {path: 'form', component: CformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
