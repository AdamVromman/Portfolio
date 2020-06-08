import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from '../app/home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SoftwareComponent } from './software/software.component';
import { RouteModule } from './route/route.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SoftwareComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
