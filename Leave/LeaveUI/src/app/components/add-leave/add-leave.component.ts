import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Leave } from 'src/app/model/leave.model';
import { LeaveService } from 'src/app/service/leave.service';

@Component({
  selector: 'app-add-leave',
  templateUrl: './add-leave.component.html',
  styleUrls: ['./add-leave.component.css']
})
export class AddLeaveComponent implements OnInit {
  dateSV=formatDate(new Date(), 'yyyy-MM-dd', 'en');
  
  constructor(private leaveService:LeaveService,private router:Router){
  }
  leave:Leave;
  dateE:Date;
  empId:number;
  ngOnInit(): void {
  }

  onLeaveSubmit(leaveForm:NgForm){
    this.leave={
      start:leaveForm.value.start,
      end:leaveForm.value.end,
      leaveDays:leaveForm.value.leaveDays,
      type:leaveForm.value.type,
      reason:leaveForm.value.reason
    }
    this.leaveService.employeeSubject.subscribe(data=>{
      this.empId=data.id;
    })

    this.leaveService.postLeave(this.empId,this.leave).subscribe(data=>{
      this.router.navigateByUrl("/all-leave-employee");
    })
  }

  startSelect(leaveForm:NgForm){
    this.dateE=leaveForm.value.start;
  }
}
