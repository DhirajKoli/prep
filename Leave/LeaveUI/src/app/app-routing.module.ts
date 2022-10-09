import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLeaveComponent } from './components/add-leave/add-leave.component';
import { AllLeaveEmployeeComponent } from './components/all-leave-employee/all-leave-employee.component';
import { AllLeaveManagerComponent } from './components/all-leave-manager/all-leave-manager.component';
import { ApproveDenyComponent } from './components/approve-deny/approve-deny.component';
import { EmployeeViewComponent } from './components/employee-view/employee-view.component';
import { HomeComponent } from './components/home/home.component';
import { ManagerViewComponent } from './components/manager-view/manager-view.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path:"employee-view", component:EmployeeViewComponent},
  { path:"manager-view", component:ManagerViewComponent},
  { path:"add-leave", component:AddLeaveComponent},
  { path:"all-leave-employee", component:AllLeaveEmployeeComponent},
  { path:"all-leave-manager", component:AllLeaveManagerComponent},
  { path:"approve-deny", component:ApproveDenyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
