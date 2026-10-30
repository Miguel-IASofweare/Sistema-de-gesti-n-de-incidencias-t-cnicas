import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input
} from '@angular/core';

@Directive({
  selector: '[appHighlightCritical]',
  standalone: true,
})
export class HighlightCritical {

  @Input()
  isCritical = false;

  @HostBinding('class.highlight-critical')
  isHighligthted = false;

  @HostListener('mouseenter')
  onMouseEnter(): void {

    if (this.isCritical) {

      this.isHighligthted = true;

    }

  }

  @HostListener('mouseleave')
  onMouseLeave(): void {

    this.isHighligthted = false ;

  }

  

}
