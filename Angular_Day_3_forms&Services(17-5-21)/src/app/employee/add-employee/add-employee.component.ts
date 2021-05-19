import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  @Input() countFromParent :number=0;

  @Output() countFromChild=new EventEmitter<number>();
  
  signupForm:any;
  constructor() { }
  ngOnInit(): void {
    this.signupForm=new FormGroup({
      id: new FormControl(null,Validators.required),
      password: new FormControl(null,Validators.required),
      name: new FormControl(null,[Validators.required,Validators.email]),
      address: new FormControl(null,Validators.required),
      age: new FormControl(null,Validators.required),
      company: new FormControl(null,Validators.required),
    });
  }

  onSubmit():void{
    console.log(this.signupForm);
    this.countFromChild.emit(this.countFromParent+5);
  }
}
