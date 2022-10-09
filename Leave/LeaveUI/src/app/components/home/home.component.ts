import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee.model';
import { LeaveService } from 'src/app/service/leave.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private leaveService:LeaveService,private router:Router) { }
  employee:Employee;
  ngOnInit(): void {
  }

  onEmployeeSubmit(employeeForm:NgForm){
    this.leaveService.getEmployeeById(employeeForm.value.id).subscribe(data=>{
      this.employee=data;
      this.leaveService.employeeSubject.next(this.employee);
      if(this.employee.role==1)
      {
        this.router.navigateByUrl("/employee-view")
      }
      else{
        this.router.navigateByUrl("/manager-view")
      }

    })
  }
}
