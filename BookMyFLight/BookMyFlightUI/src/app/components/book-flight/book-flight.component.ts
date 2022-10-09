import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Booking } from 'src/app/model/booking.model';
import { BoookingDto } from 'src/app/model/bookingDto.model';
import { Flight } from 'src/app/model/flight.model';
import { BookingService } from 'src/app/service/booking.service';
import { FlightService } from 'src/app/service/flight.service';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css']
})
export class BookFlightComponent implements OnInit, OnDestroy {

  constructor(private flightService:FlightService,private bookingService:BookingService,private router:Router) { }
  
  flightId:number;
  flight:Flight;
  bookingDto:BoookingDto;
  ngOnInit(): void {
    this.flightId=Number(localStorage.getItem("flightId"));
    this.flightService.getFlightById(this.flightId).subscribe(
      data=>{
        this.flight=data;
      }
    );
  }

  onBookingSubmit(bookingForm:NgForm){
    this.bookingDto={
      flightId:this.flightId,
      adult:bookingForm.value.adult,
      child:bookingForm.value.child
    }
    this.bookingService.postBooking(this.bookingDto).subscribe()
    this.router.navigateByUrl("/all-bookings");
  }
  ngOnDestroy(): void {
  }
}