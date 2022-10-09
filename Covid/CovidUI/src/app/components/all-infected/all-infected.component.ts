import { Component, OnInit } from '@angular/core';
import { Infected } from 'src/app/model/infected.model';
import { InfectedService } from 'src/app/service/infected.service';

@Component({
  selector: 'app-all-infected',
  templateUrl: './all-infected.component.html',
  styleUrls: ['./all-infected.component.css']
})
export class AllInfectedComponent implements OnInit {

  constructor(private infectedService:InfectedService) { }
  infectedArray:Infected[];
  ngOnInit(): void {
    this.infectedService.getAllInfected().subscribe(data=>{
      this.infectedArray=data;
    })
  }

}
