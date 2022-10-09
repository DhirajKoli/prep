import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Flight } from 'src/app/model/flight.model';
import { Search } from 'src/app/model/search.model';
import { FlightService } from 'src/app/service/flight.service';
import { SearchService } from 'src/app/service/search.service';

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css']
})
export class SearchFlightsComponent implements OnInit ,OnDestroy{


  constructor(private searchService:SearchService,private flightService:FlightService,private router:Router) { }
  search:Search;
  flightArr:Flight[];
  status:boolean;

  ngOnInit(): void {
    this.flightArr=[];
    this.status=false;
  }

  onSearchSubmit(searchForm:NgForm){
    this.search={
      source:searchForm.value.source,
      destination:searchForm.value.destination,
      date:searchForm.value.date,
    }
    this.searchService.searchFlights(this.search).subscribe(
      data=>{
        this.flightArr=data;
        this.status=true;
      }
    );
  }

  bookFlight(fid:number){
    localStorage.setItem("flightId",String(fid));
    this.router.navigateByUrl("/book-flight");
  }

  ngOnDestroy(): void {
  }
}
