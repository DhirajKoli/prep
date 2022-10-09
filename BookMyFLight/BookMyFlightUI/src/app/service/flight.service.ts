import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../model/booking.model';
import { Flight } from '../model/flight.model';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http:HttpClient) { }

  getAllFlights():Observable<Flight[]>{
    return this.http.get<Flight[]>("http://localhost:5671/flight/all");
  }

  postFlight(flight: Flight): Observable<Flight>{
    return this.http.post<Flight>("http://localhost:5671/flight/post",flight);
  }

  getFlightById(fid:number):Observable<Flight>{
    return this.http.get<Flight>("http://localhost:5671/flight/"+fid)
  }

  deleteFlight(fid:number): Observable<any> { 
    return this.http.delete("http://localhost:5671/flight/delete/"+fid)
  }

  postBooking(booking:Booking): Observable<Flight>{
    return this.http.post<Flight>("http://localhost:5671/book",booking);
  }
}
