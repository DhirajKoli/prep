import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Leave } from 'src/app/model/leave.model';
import { LeaveService } from 'src/app/service/leave.service';

@Component({
  selector: 'app-all-leave-manager',
  templateUrl: './all-leave-manager.component.html',
  styleUrls: ['./all-leave-manager.component.css']
})
export class AllLeaveManagerComponent implements OnInit {

  constructor(private leaveService:LeaveService,private router:Router) { }
  leaves:Leave[];
  
  ngOnInit(): void {
    this.leaveService.getAllLeavesPending().subscribe(data=>{
      this.leaves=data;
    })
  }

  approveDeny(id:number){
    this.leaveService.leaveIdSubject.next(id);
    this.router.navigateByUrl("/approve-deny");
  }

}
