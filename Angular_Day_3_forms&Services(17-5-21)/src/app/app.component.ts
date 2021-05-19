import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee-management';
  count=10;
  //name = 'CTS';
  //employee={name: 'Naveen',salary:52000,address:'Chennai'};//javascript object}
  //for multiple employee
  /*emp=[
    {name: 'Naveen',salary:52000,address:'Chennai'},
    {name: 'Naveen',salary:52000,address:'Chennai'},
    {name: 'Naveen',salary:52000,address:'Chennai'},*/
  getFromChild(event:any):void{
    this.count=event;
  }
  ngOnInit(): void {
this.getFromChild(this.count);
  }

}


