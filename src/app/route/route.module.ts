import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { FutureComponent } from '../future/future.component';
import { MeComponent } from '../me/me.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';

let ROUTES: Routes = [
  {component: HomeComponent, path:'home', data:{animation: 'home'}},
  {component: ProjectsComponent, path:'projects'},
  {component: FutureComponent, path:'future'},
  {component: ContactComponent, path:'contact'},
  {component: MeComponent, path:'me'},
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'**', redirectTo: 'home', pathMatch: 'full'}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports:[
    RouterModule
  ]

  

})
export class RouteModule { }
