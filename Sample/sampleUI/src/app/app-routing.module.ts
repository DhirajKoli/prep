import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCoursesComponent } from './components/all-courses/all-courses.component';
import { HomeComponent } from './components/home/home.component';
import { InsertCourseComponent } from './components/insert-course/insert-course.component';
import { InsertDepartmentComponent } from './components/insert-department/insert-department.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'insert-department', component: InsertDepartmentComponent },
  { path: 'insert-course', component: InsertCourseComponent },
  { path: 'all-courses', component: AllCoursesComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
