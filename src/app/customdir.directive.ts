import { Directive,ElementRef,OnInit} from '@angular/core';

@Directive({
  selector: '[appCustomdir]'
})
export class CustomdirDirective implements OnInit{

constructor(private el:ElementRef ){}

ngOnInit(){
  let display = Array.from(this.el.nativeElement.children);
  display.forEach((tag:any)=>{ 
    tag.style.color = tag.localName ==  "span" ?  "green": "black";   // search span and highlight it
  });
}
}
