import { Component,ElementRef} from '@angular/core';


//********** */ ATTRIBUTE DIRECTIVES**************

/*@Component({
  selector: 'app-directives',
  template: `<button style='color:purple'[ngStyle]="MyStyle()">Priyadharshini</button>`
  //styleUrls: ['./directives.component.css']
})
export class DirectivesComponent{

  isBold: boolean = true;    
		fontSize: number = 30;    
		isItalic: boolean = true;    
    
    MyStyle() {    
        let mystyles = {    
            'font-weight': this.isBold ? 'bold' : 'normal',    
            'font-style': this.isItalic ? 'italic' : 'normal',    
            'font-size.px': this.fontSize    
        };    
    
        return mystyles;    
		}  
}

******************NgClass***************

@Component({    
  selector: 'app-directives',    
  template: `<button class='colorClass' [ngClass]='applyClasses()'>Saminathan</button>`,    
  styles: [`.boldClass{    
              font-weight:bold;    
                font-size : 30px;    
          }    
  
          .italicsClass{    
              font-style:italic;    
          }    
  
          .colorClass{    
              color:blue;               
}`]    
})    
export class DirectivesComponent {    
  applyBoldClass: boolean = true;    
  applyItalicsClass: boolean = true;    
  
  applyClasses() {    
      let classes = {    
          boldClass: this.applyBoldClass,    
          italicsClass: this.applyItalicsClass    
      };    
  
      return classes;    
  }    
}    	

***************Structural directives************\*/

@Component({    
  selector: 'app-directives',    
  template: `<h2>{{title}}</h2>      
<p *ngIf="showElement">Show Element</p>      
<div [ngSwitch]="invalue">      
<p style='color:blue'  *ngSwitchCase="1">You have selected M S Dhoni</p>      
<p style='color:blue'  *ngSwitchCase="2">You have selected Sachin Tendulkar</p>      
<p style='color:blue'  *ngSwitchCase="3">You have selected Satyaprakash Samantaray</p>     
<p style='color:red'  *ngSwitchDefault>Sorry! Invalid selection....</p>      
</div>`      
})    
export class DirectivesComponent {    
  showElement=true;
  invalue: number = 4;  
  title="Switch";  
}
