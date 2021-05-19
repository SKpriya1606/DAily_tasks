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

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DataBindingComponent,
    DirectivesComponent,
    //CustomDirectivesDirective,
    UserFormComponent,
    AddEmployeeComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
