import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
//import { CustomDirectivesDirective } from './custom-directives.directive';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule } from '@angular/forms';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
//import { SkillsComponent } from './skills/skills.component';
//import { SkillsModelComponent } from './skills-model/skills-model.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DataBindingComponent,
    DirectivesComponent,
    //CustomDirectivesDirective,
    UserFormComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    UserComponent,
    AddUserComponent,
    UpdateUserComponent,
   // SkillsComponent,
    //SkillsModelComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
