import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Infected } from 'src/app/model/infected.model';
import { InfectedService } from 'src/app/service/infected.service';

@Component({
  selector: 'app-filter-infected',
  templateUrl: './filter-infected.component.html',
  styleUrls: ['./filter-infected.component.css']
})
export class FilterInfectedComponent implements OnInit {

  constructor(private infectedService:InfectedService) { }
  cityArray:string[];
  projectArray:string[];
  infectedArray:Infected[];
  status:boolean;

  ngOnInit(): void {
    this.infectedService.getCities().subscribe(data=>{
        this.cityArray=data;
      })
    this.infectedService.getProjects().subscribe(data=>{
        this.projectArray=data;
      })
    this.status=false;
  }

  onFormSubmit(filterForm:NgForm){
    this.infectedService.getInfectedByFilter(filterForm.value.city,filterForm.value.project,filterForm.value.gender).subscribe(
      data=>{
        this.infectedArray=data;
        this.status=true;
      }
    )
  }
}
