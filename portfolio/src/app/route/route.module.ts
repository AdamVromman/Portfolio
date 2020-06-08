import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoftwareComponent } from '../software/software.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';

let ROUTES: Routes = [
  {component: HomeComponent, path:'home', data:{animations: 'homePage'}},
  {component: SoftwareComponent, path:'software', data:{animations: 'softwarePage'}},
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
