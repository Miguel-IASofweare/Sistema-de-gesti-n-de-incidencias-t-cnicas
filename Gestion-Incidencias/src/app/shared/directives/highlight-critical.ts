import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input
} from '@angular/core';

@Directive({
  selector: '[appHighlightCritical]',
  standalone: true
})
export class HighlightCritical {

  @Input()
  isCritical = false;

  @HostBinding('style.border')
  border = '';

  @HostListener('mouseenter')
  onMouseEnter(): void {

    if (this.isCritical) {

      this.border =
        '3px solid red';

    }

  }

  @HostListener('mouseleave')
  onMouseLeave(): void {

    this.border = '';

  }

}