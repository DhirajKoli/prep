import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Booking } from './model/booking.model';
import { Employee } from './model/employee.model';
import { Flight } from './model/flight.model';
import { BookingService } from './service/booking.service';
import { FlightService } from './service/flight.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(){}


  ngOnInit(): void {

  }


  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
