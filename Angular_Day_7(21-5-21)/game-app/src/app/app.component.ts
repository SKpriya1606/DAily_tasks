import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evenArray:number[]=[];
  oddArray:number[]=[];

  incrementingEvent(incrementNumber:number){
    if(incrementNumber%2==0)
    {
      this.evenArray.push(incrementNumber);
    }
    else{
      this.oddArray.push(incrementNumber);
    }

  }
}
