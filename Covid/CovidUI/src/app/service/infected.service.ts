import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Infected } from '../model/infected.model';

@Injectable({
  providedIn: 'root'
})
export class InfectedService {

  constructor(private http:HttpClient) { }

  postInfected(id:number,infected:Infected):Observable<Infected>{
    return this.http.post("http://localhost:8599/infected/insert/"+id,infected)
  }

  getAllInfected():Observable<Infected[]>{
    return this.http.get<Infected[]>("http://localhost:8599/infected/all")
  }

  getInfectedByFilter(city:string,project:string,gender:string):Observable<Infected[]>{
    return this.http.get<Infected[]>("http://localhost:8599/infected/"+city+"/"+project+"/"+gender)
  }

  getCities():Observable<string[]>{
    return this.http.get<string[]>("http://localhost:8599/cities");
  }
  
  getProjects():Observable<string[]>{
    return this.http.get<string[]>("http://localhost:8599/projects");
  }
}
