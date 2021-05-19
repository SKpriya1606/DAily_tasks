import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { CustomDirectivesDirective } from './custom-directives.directive';
//import { RedDirective } from './red.directive';
//import { CustomDirectivesDirective } from './custom-directives.directive';
//import { DirectivesDirective } from './directives.directive';
//import { StudentComponent } from './employee/student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DataBindingComponent,
    DirectivesComponent,
    CustomDirectivesDirective,
    //RedDirective,
    //CustomDirectivesDirective,
    //DirectivesDirective,
    //StudentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
