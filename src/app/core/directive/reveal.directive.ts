import { Directive, ElementRef, input, effect } from '@angular/core';
import revealObserver from '../reveal-observer';

@Directive({
  selector: '[appReveal]',
})
export class RevealDirective {
  animationClass = input<string>('', {
    alias: 'appReveal',
  });
  delay = input<string>('0.1'); // e.g. '0.3s'

  constructor(private el: ElementRef) {
    const element = this.el.nativeElement as HTMLElement;
    element.classList.add('opacity-0');
    effect(() => {
      // store values (read signal once)
      element.dataset['reveal'] = this.animationClass();

      if (this.delay()) {
        element.dataset['delay'] = this.delay() + 's';
      }

      // observe
      revealObserver.observe(element);
    });
  }
}
