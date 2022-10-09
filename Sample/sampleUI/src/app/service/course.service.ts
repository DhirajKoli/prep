import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Course } from '../model/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  // Error Handling

  // https://rollbar.com/blog/error-handling-with-angular-8-tips-and-best-practices/

  // Just a subject variable to transfer 
  courseSubject = new BehaviorSubject<Course>({});

  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<Course[]>{
    return this.http.get<Course[]>("http://localhost:8183/course/all");
  }

  getMaxDate(): Observable<Date>{
    return this.http.get<Date>("http://localhost:8183/course/maxdate");
  }

  postCourse(course:Course): Observable<Course>{
    return this.http.post<Course>("http://localhost:8183/course/post",course)
  }
}
