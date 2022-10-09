import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../model/booking.model';
import { BoookingDto } from '../model/bookingDto.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http:HttpClient) { }

  getAllBookings(): Observable<Booking[]>{
    return this.http.get<Booking[]>("http://localhost:5671/bookings");
  }

  postBooking(bookingDto:BoookingDto):Observable<Booking>{
    return this.http.post<Booking>("http://localhost:5671/book",bookingDto);
  }
}
