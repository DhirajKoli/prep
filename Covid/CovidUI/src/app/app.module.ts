import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { InsertFormComponent } from './components/insert-form/insert-form.component';
import { AllInfectedComponent } from './components/all-infected/all-infected.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FilterInfectedComponent } from './components/filter-infected/filter-infected.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    InsertFormComponent,
    AllInfectedComponent,
    PageNotFoundComponent,
    FilterInfectedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
