import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllInfectedComponent } from './components/all-infected/all-infected.component';
import { FilterInfectedComponent } from './components/filter-infected/filter-infected.component';
import { HomeComponent } from './components/home/home.component';
import { InsertFormComponent } from './components/insert-form/insert-form.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "insert-form", component: InsertFormComponent },
  { path: "all-infected", component: AllInfectedComponent },
  { path: "filter-infected", component: FilterInfectedComponent },
  { path: "**", component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
