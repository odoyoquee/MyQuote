import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlighgt]'
})
export class HighlighgtDirective {

  constructor(private elem: ElementRef) { }

  @HostListener('click') upVotes() {
    this.highlight('highlight');
  }
  @HostListener('dblclick') onDoubleClicks() {
    this.highlight('highlight');
  }
  private highlight(highlight: string){
    this.elem.nativeElement.style.backgroundColor = 'yellow'; // style will be fill with yellow as bg color on click trigger
  }

}
