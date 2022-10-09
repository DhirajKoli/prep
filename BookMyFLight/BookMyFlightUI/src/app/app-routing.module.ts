import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllBookingsComponent } from './components/all-bookings/all-bookings.component';
import { AllFlightsComponent } from './components/all-flights/all-flights.component';
import { BookFlightComponent } from './components/book-flight/book-flight.component';
import { HomeComponent } from './components/home/home.component';
import { InsertFlightComponent } from './components/insert-flight/insert-flight.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SearchFlightsComponent } from './components/search-flights/search-flights.component';

const routes: Routes = [
  {path:'' ,component:HomeComponent},
  {path:'insert-flight' , component: InsertFlightComponent},
  {path:'search-flights', component:SearchFlightsComponent},
  {path:'book-flight',component:BookFlightComponent},
  {path:"all-bookings",component:AllBookingsComponent},
  {path:"all-flights",component:AllFlightsComponent},
  {path:'**',component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
