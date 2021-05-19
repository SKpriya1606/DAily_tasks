import { Component, OnInit } from "@angular/core";
import {EMPLOYEE} from "../employee-mock";
import {EmployeeService} from "../services/employee.service";

//decorator
@Component({
    selector:'app-employee',//selector-name to use in html file
    templateUrl: './employee.component.html',
    styleUrls:['./employee.component.css']
})
export class EmployeeComponent implements OnInit{
    employee= EMPLOYEE;
//Dependency Injection inside Constructor
    constructor(private employeeService:EmployeeService){}

    //Angular hooks(angular life cycle methods)

    ngOnInit():void{
            this.employeeService.getAllEmployees().subscribe(data => {
                this.employee= data;
            });
    }
   
}