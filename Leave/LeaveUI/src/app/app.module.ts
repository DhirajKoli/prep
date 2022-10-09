import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBar1Component } from './components/nav-bar1/nav-bar1.component';
import { NavBar2Component } from './components/nav-bar2/nav-bar2.component';
import { HomeComponent } from './components/home/home.component';
import { AllLeaveManagerComponent } from './components/all-leave-manager/all-leave-manager.component';
import { AllLeaveEmployeeComponent } from './components/all-leave-employee/all-leave-employee.component';
import { AddLeaveComponent } from './components/add-leave/add-leave.component';
import { ApproveDenyComponent } from './components/approve-deny/approve-deny.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeViewComponent } from './components/employee-view/employee-view.component';
import { ManagerViewComponent } from './components/manager-view/manager-view.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBar1Component,
    NavBar2Component,
    HomeComponent,
    AllLeaveManagerComponent,
    AllLeaveEmployeeComponent,
    AddLeaveComponent,
    ApproveDenyComponent,
    EmployeeViewComponent,
    ManagerViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
