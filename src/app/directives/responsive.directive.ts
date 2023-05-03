import { Directive, ElementRef } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
@Directive({
  selector: '[appResponsive]'
})
export class ResponsiveDirective {

  constructor(private element: ElementRef, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([
      Breakpoints.WebLandscape,
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {

      for (let breakpoint of Object.keys(result.breakpoints)) {
        if (result.breakpoints[breakpoint]) {
          if (breakpoint == Breakpoints.HandsetPortrait) {
            console.log("pc");

            this.element.nativeElement.classList.remove('pc')
          }
          if (breakpoint == Breakpoints.WebLandscape) {
            console.log(" not pc");

            this.element.nativeElement.classList.add('pc');
          }

        }
      }
    })
  }
}
