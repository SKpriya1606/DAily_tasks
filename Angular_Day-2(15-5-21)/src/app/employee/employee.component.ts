import { Component } from "@angular/core";
import {EMPLOYEE} from "../employee-mock";

//decorator
@Component({
    selector:'app-employee',//selector-name to use in html file
    templateUrl: './employee.component.html',
    styleUrls:['./employee.component.css']
})
export class EmployeeComponent {
    employee = EMPLOYEE;
}