import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from 'src/app/model/department.model';
import { DepartmentService } from 'src/app/service/department.service';

@Component({
  selector: 'app-insert-department',
  templateUrl: './insert-department.component.html',
  styleUrls: ['./insert-department.component.css'],
})
export class InsertDepartmentComponent implements OnInit {
  constructor(private departmentService: DepartmentService) {}

  department: Department;

  ngOnInit(): void {}

  onDepartmentSubmit(departmentForm: NgForm) {
    this.department = {
      name: departmentForm.value.name,
    };
    this.departmentService.postDepartment(this.department).subscribe();
  }
}
