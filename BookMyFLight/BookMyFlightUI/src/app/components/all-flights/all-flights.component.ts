import { Component, OnDestroy, OnInit } from '@angular/core';
import { Flight } from 'src/app/model/flight.model';
import { FlightService } from 'src/app/service/flight.service';

@Component({
  selector: 'app-all-flights',
  templateUrl: './all-flights.component.html',
  styleUrls: ['./all-flights.component.css']
})
export class AllFlightsComponent implements OnInit, OnDestroy{

  constructor(private flightService:FlightService) { }
  
  flightArr:Flight[];

  ngOnInit(): void {
    this.flightService.getAllFlights().subscribe(data=>{
      this.flightArr=data;
    })
  }

  ngOnDestroy(): void {
  }
}
