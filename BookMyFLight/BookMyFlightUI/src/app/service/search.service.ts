import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../model/flight.model';
import { Search } from '../model/search.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }

  searchFlights(search:Search): Observable<Flight[]>{
    let queryParams = new HttpParams();
    queryParams = queryParams.append("source",search.source);
    queryParams = queryParams.append("destination",search.destination);
    queryParams = queryParams.append("date",search.date);

    return this.http.get<Flight[]>("http://localhost:5671/flight/details",{params:queryParams});
  }
}
