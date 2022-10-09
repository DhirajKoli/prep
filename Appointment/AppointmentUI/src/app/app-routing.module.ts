import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllAppointmentsComponent } from './components/all-appointments/all-appointments.component';
import { BookAppointmentComponent } from './components/book-appointment/book-appointment.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SearchSlotsComponent } from './components/search-slots/search-slots.component';
import { SlotsComponent } from './components/slots/slots.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search-slots', component: SearchSlotsComponent },
  { path: 'book-appointment', component: BookAppointmentComponent },
  { path: 'all-appointments', component: AllAppointmentsComponent },
  { path: 'slots', component: SlotsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
