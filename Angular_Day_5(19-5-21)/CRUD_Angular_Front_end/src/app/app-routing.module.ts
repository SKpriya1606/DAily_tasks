import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import {UpdateUserComponent} from './user/update-user/update-user.component';


/*const routes: Routes = [
  {path: '', component: EmployeeComponent},
  {path:'add-employee', component: AddEmployeeComponent},
  {path: 'employee/:id',component:EmployeeComponent},
  {path: 'update-employee',component:UpdateEmployeeComponent},
];*/

const routes: Routes = [
  {path: '', component: UserComponent}, 
  {path:'add-user', component: AddUserComponent}, 
  {path:'update-user', component: UpdateUserComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
