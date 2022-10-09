import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Infected } from 'src/app/model/infected.model';
import { InfectedService } from 'src/app/service/infected.service';

@Component({
  selector: 'app-insert-form',
  templateUrl: './insert-form.component.html',
  styleUrls: ['./insert-form.component.css']
})
export class InsertFormComponent implements OnInit {

  constructor(private infectedService:InfectedService,private router:Router) { }
  empId:number;
  infected:Infected;
  dateV=formatDate(new Date(), 'yyyy-MM-dd', 'en');

  ngOnInit(): void {
  }

  onFormSubmit(covidForm:NgForm){
    this.empId=covidForm.value.id;
    this.infected={
      affectedDate:covidForm.value.date,
      dosages:covidForm.value.dosages,
      sickLeaves:14,
      funds:10000.00,
      status:"Under Recovery"
    }

    this.infectedService.postInfected(this.empId,this.infected).subscribe(data=>{
      this.router.navigateByUrl("/all-infected")
    })
  }
}