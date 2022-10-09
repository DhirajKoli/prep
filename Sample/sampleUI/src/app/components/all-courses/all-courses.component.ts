import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/model/course.model';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})
export class AllCoursesComponent implements OnInit {


  course:Course;
  courseArr:Course[];
  constructor(private courseService:CourseService, private router:Router) { }

  ngOnInit(): void {

    //subject is catched using subject variable from course services
    this.courseService.courseSubject.subscribe(
      data=>{
        this.course=data;
      }
    );

    this.courseService.getAllCourses().subscribe(
      data=>{
        this.courseArr=data;
      }
    );

    

  }

  bookCourse(cid:number){
    this.router.navigateByUrl("/book-flight");
  }

}
