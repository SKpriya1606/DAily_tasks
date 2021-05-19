import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

 // @ViewChild('f') submittedForm: NgForm;
  constructor() { 
   // this.submittedForm=;
  }

  ngOnInit(): void {
  }
  OnSubmit(form:ElementRef<any>){
    console.log(form);
  }
}
