import { Component } from "@angular/core";

//decorator
@Component({
    selector:'app-employee',//selector-name to use in html file
    templateUrl: './employee.component.html',
    styleUrls:['./employee.component.css']
})
export class EmployeeComponent {
    emp=[
        {name: 'Naveen',salary:52000,address:'Chennai'},
        {name: 'Naveen',salary:52000,address:'Chennai'},
        {name: 'Naveen',salary:52000,address:'Chennai'},
      
    ];
}