import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Employee } from '../model/employee.model';
import { Leave } from '../model/leave.model';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  employeeSubject= new BehaviorSubject<Employee>({});
  leaveIdSubject = new BehaviorSubject<number>(-1);
  constructor(private http:HttpClient) { }

  getEmployeeById(id:number):Observable<Employee>{
    return this.http.get<Employee>("http://localhost:7777/employee/"+id);
  }
  getLeavesById(id:number):Observable<Leave[]>{
    return this.http.get<Leave[]>("http://localhost:7777/leave/all/"+id);
  }

  getLeavesByLeaveId(id:number):Observable<Leave>{
    return this.http.get<Leave>("http://localhost:7777/leave/"+id);
  }
  getAllLeavesPending():Observable<Leave[]>{
    return this.http.get<Leave[]>("http://localhost:7777/leave/manager/all/");
  }

  postLeave(id:number,leave:Leave):Observable<Leave>{
    return this.http.post<Leave>("http://localhost:7777/leave/post/"+id,leave);
  }

  approveLeave(id:number,comment:string):Observable<Leave>{
    return this.http.get<Leave>("http://localhost:7777/leave/approve/"+id+"/"+comment);
  }

  denyLeave(id:number,comment:string):Observable<Leave>{
    return this.http.get<Leave>("http://localhost:7777/leave/deny/"+id+"/"+comment);
  }
}
