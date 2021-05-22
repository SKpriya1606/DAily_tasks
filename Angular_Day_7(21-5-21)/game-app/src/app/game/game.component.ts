import { Component, EventEmitter, OnInit, Output } from '@angular/core';
//import { emit } from 'process';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Output() incrementNumber=new EventEmitter<number>();
  interval:any;
  num=0;
  constructor() { }

  ngOnInit(): void {
  }

  onStart():void{
    this.interval=setInterval(()=>{
        this.incrementNumber.emit(this.num);
        this.num++;
    },1000);
    }

 onStop():void{
   clearInterval(this.interval);
 }

}
