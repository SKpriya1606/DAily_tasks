import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  @Input() countFromParent :number=0;
  employee! : Employee;
  @Output() countFromChild=new EventEmitter<number>();
  
  signupForm:any;
  constructor( private employeeService:EmployeeService, private router:Router) { }

  ngOnInit(): void {
    this.signupForm=new FormGroup({
      id: new FormControl(null,Validators.required),
      name: new FormControl(null,[Validators.required,Validators.email]),
      address: new FormControl(null,Validators.required),
      age: new FormControl(null,Validators.required),
      company: new FormControl(null,Validators.required),
    });
  }

  addEmployee(): void{

  }

  onSubmit():void{
    
    //this.countFromChild.emit(this.countFromParent+5);
    this.employeeService.createEmployee(this.signupForm.value).subscribe(data =>{
      console.log("Employee Added Successfully");
      this.router.navigate(['']);

    });
    console.log(this.signupForm);
  }
}
