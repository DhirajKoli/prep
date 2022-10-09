import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Leave } from 'src/app/model/leave.model';
import { LeaveService } from 'src/app/service/leave.service';

@Component({
  selector: 'app-approve-deny',
  templateUrl: './approve-deny.component.html',
  styleUrls: ['./approve-deny.component.css']
})
export class ApproveDenyComponent implements OnInit {

  constructor(private leaveService:LeaveService,private router:Router) { }
  leave:Leave;
  leaveId:number;
  comment:string;
  ngOnInit(): void {
    this.leaveService.leaveIdSubject.subscribe(data=>{
      this.leaveId=data;
      this.leaveService.getLeavesByLeaveId(this.leaveId).subscribe(data=>{
        this.leave=data;
      })
    })
  }

  onSubmit(leaveForm:NgForm){
    this.comment=leaveForm.value.comment;
    if(leaveForm.value.status==="Approve"){
      this.leaveService.approveLeave(this.leaveId,this.comment).subscribe(
        data=>{
          this.router.navigateByUrl("/all-leave-manager");
        }
      );
    }
    else{
      this.leaveService.denyLeave(this.leaveId,this.comment).subscribe(
        data=>{
          this.router.navigateByUrl("/all-leave-manager");
        }
      );
    }
  }

}
