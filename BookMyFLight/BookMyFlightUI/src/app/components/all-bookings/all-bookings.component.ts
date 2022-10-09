import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/model/booking.model';
import { BookingService } from 'src/app/service/booking.service';

@Component({
  selector: 'app-all-bookings',
  templateUrl: './all-bookings.component.html',
  styleUrls: ['./all-bookings.component.css']
})
export class AllBookingsComponent implements OnInit {

  constructor(private bookingService:BookingService) { }
  bookingArr:Booking[];

  ngOnInit(): void {
    this.bookingService.getAllBookings().subscribe(data=>{
      this.bookingArr=data;
    });
  }

}
