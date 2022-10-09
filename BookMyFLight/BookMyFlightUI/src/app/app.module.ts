import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { InsertFlightComponent } from './components/insert-flight/insert-flight.component';
import { BookFlightComponent } from './components/book-flight/book-flight.component';
import { SearchFlightsComponent } from './components/search-flights/search-flights.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AllBookingsComponent } from './components/all-bookings/all-bookings.component';
import { AllFlightsComponent } from './components/all-flights/all-flights.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    InsertFlightComponent,
    BookFlightComponent,
    SearchFlightsComponent,
    PageNotFoundComponent,
    AllBookingsComponent,
    AllFlightsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
