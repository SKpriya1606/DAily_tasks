import { Directive , ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appCustomDirectives]'
})
@Input()
//@HostListener()
export class CustomDirectivesDirective {

  constructor(elRef: ElementRef<any>) {
    elRef.nativeElement.style.color='red';
   }
}
//<p appcustomDirectives>Hello This is Red</p>