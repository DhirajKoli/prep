import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Flight } from 'src/app/model/flight.model';
import { FlightService } from 'src/app/service/flight.service';

@Component({
  selector: 'app-insert-flight',
  templateUrl: './insert-flight.component.html',
  styleUrls: ['./insert-flight.component.css']
})
export class InsertFlightComponent implements OnInit {

  constructor(private flightService:FlightService,private router:Router) { }

  flight:Flight;

  ngOnInit(): void {
  }

  onFlightSubmit(flightForm:NgForm){
    console.log(flightForm.value.departureDate);
    console.log(flightForm.value.departureTime);
    this.flight={
    source: flightForm.value.source,
    destination: flightForm.value.destination,
    departureDate: flightForm.value.departureDate,
    departureTime: flightForm.value.departureTime,
    arrivalDate: flightForm.value.arrivalDate,
    arrivalTime: flightForm.value.arrivalTime,
    adultFare:flightForm.value.adultFare,
    childFare:flightForm.value.childFare,
    seats: flightForm.value.seats
    }

    this.flightService.postFlight(this.flight).subscribe(
      data=>{
        this.router.navigateByUrl("/all-flights");
      }
    );
  }

}
