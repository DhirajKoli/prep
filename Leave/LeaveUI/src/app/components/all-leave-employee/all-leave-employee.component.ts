import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee.model';
import { Leave } from 'src/app/model/leave.model';
import { LeaveService } from 'src/app/service/leave.service';

@Component({
  selector: 'app-all-leave-employee',
  templateUrl: './all-leave-employee.component.html',
  styleUrls: ['./all-leave-employee.component.css']
})
export class AllLeaveEmployeeComponent implements OnInit {

  constructor(private leaveService:LeaveService) { }
  employee:Employee;
  leaves:Leave[];
  ngOnInit(): void {
    this.leaveService.employeeSubject.subscribe(data=>{
      this.employee=data;
    })

    this.leaveService.getLeavesById(this.employee.id).subscribe(data=>{
      this.leaves=data;
    })
  }

}
