/*import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {EMPLOYEE} from "../employee-mock";
import { Employee } from "../model/employee";
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
    constructor(private employeeService:EmployeeService,private router:Router){}//to move from on epage to another we use router

    //Angular hooks(angular life cycle methods)

    ngOnInit():void{
            this.employeeService.getAllEmployees().subscribe(data => {
                this.employee= data;
            });
    }
   updateEmployee(employee:  Employee):void{
       localStorage.removeItem('id');
       localStorage.setItem('id',employee.id.toString());//id is stored in local storage
     this.router.navigate(['update-employee']);
   }

   deleteEmployee(employee: Employee): void{
       this.employeeService.deleteEmployee(employee.id).subscribe();
       this.employee=this.employee.filter(e => e !== employee);
   }
}*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EMPLOYEE } from 'src/app/employee-mock';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';
 
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
 
  employee=EMPLOYEE;
constructor(private employeeService: EmployeeService ,private router:Router){
 
}
  ngOnInit(): void{
  this.employeeService.getAllEmployees().subscribe(data => {
  this.employee = data;
 
 });
 
  }
 
  updateEmployee(employee: Employee): void{
    localStorage.removeItem('id');
    localStorage.setItem('id',employee.id.toString());
    this.router.navigate(['update-employee']);
  }
 
  deleteEmployee(employee: Employee): void{
 
    this.employeeService.deleteEmployee(employee.id).subscribe();
    this.employee=this.employee.filter(e => e !== employee);
  }
};