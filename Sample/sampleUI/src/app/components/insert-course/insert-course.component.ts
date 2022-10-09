import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Course } from 'src/app/model/course.model';
import { Department } from 'src/app/model/department.model';
import { CourseService } from 'src/app/service/course.service';
import { DepartmentService } from 'src/app/service/department.service';

@Component({
  selector: 'app-insert-course',
  templateUrl: './insert-course.component.html',
  styleUrls: ['./insert-course.component.css'],
})
export class InsertCourseComponent implements OnInit {
  course: Course;
  dateV:Date;
  departmentArray:Department[];

  constructor(private courseService:CourseService, private departmentService:DepartmentService,private router:Router) {
    this.courseService.getMaxDate().subscribe(data=>{
      this.dateV=data;
    })
    
  }

  ngOnInit(): void {
    this.departmentService.getAllDepartment().subscribe(
      data=>{
        this.departmentArray=data;
      }
    )
  }

  onCourseSubmit(courseForm: NgForm) {
    this.course = {
      name:courseForm.value.name,
      credits:courseForm.value.credits,
      fee:courseForm.value.fee,
      departmentName:courseForm.value.departmentName,
      date:courseForm.value.date,
      time:courseForm.value.time
    };

    //Go to course service first

    this.courseService.courseSubject.next(this.course); // Sharing Object from here to other component e.g: All Courses 


    this.courseService.postCourse(this.course).subscribe(
      data=>{
        this.router.navigateByUrl("/all-courses");
      }
    );
  }

  departmentSelect(courseForm:NgForm){

    // Use to populate other <select>

    // this.slotsArry = this.tempArry;
    // console.log('doctor selected..' + patientForm.value.doctor);
    // console.log(this.slotsArry);
    // this.slotsArry = this.slotsArry.filter(
    //   (s) => s.doctor.id == patientForm.value.doctor
    // );
  }
}
