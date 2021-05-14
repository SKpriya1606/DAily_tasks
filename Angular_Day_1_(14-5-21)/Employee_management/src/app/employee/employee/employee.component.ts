import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  emp=[
        {name: 'Naveen',salary:52000,address:'Chennai'},
        {name: 'Naveen',salary:52000,address:'Chennai'},
        {name: 'Naveen',salary:52000,address:'Chennai'},
      
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
