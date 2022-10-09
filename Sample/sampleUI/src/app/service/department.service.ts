import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../model/department.model';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  constructor(private http: HttpClient) {}

  postDepartment(department: Department): Observable<Department> {
    return this.http.post<Department>(
      'http://localhost:8183/department/insert',
      department
    );
  }

  getAllDepartment():Observable<Department[]>{
    return this.http.get<Department[]>("http://localhost:8183/department/all");
  }
}
