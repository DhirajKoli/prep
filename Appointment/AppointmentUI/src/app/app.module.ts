import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { AllAppointmentsComponent } from './components/all-appointments/all-appointments.component';
import { BookAppointmentComponent } from './components/book-appointment/book-appointment.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchSlotsComponent } from './components/search-slots/search-slots.component';
import { SlotsComponent } from './components/slots/slots.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AllAppointmentsComponent,
    BookAppointmentComponent,
    PageNotFoundComponent,
    SearchSlotsComponent,
    SlotsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
