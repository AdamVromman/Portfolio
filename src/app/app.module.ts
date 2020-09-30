import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from '../app/home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouteModule } from './route/route.module';
import { FutureComponent } from './future/future.component';
import { MeComponent } from './me/me.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { LanguageComponent } from './language/language.component';
import { MaterialModule } from './material/material.module';
import { PhotoComponent } from './photo/photo.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FutureComponent,
    MeComponent,
    ProjectsComponent,
    ContactComponent,
    LanguageComponent,
    PhotoComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouteModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
