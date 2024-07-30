import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appStatus]',
  standalone: true,
})
export class StatusDirective implements OnChanges {
  @Input() appStatus = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setColor(this.appStatus);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appStatus']) {
      this.setColor(changes['appStatus'].currentValue);
    }
  }

  private setColor(status: string) {
    const color = status === 'active' ? 'green' : 'blue';
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
}
