import { AfterViewInit, Component, Renderer2 } from '@angular/core';
declare var $: any;   // expose jQuery
declare var breakpoints: any;
declare var browser: any;
@Component({
  selector: 'app-intro',
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})
export class IntroComponent  implements AfterViewInit {

   constructor(private renderer: Renderer2) {}
  ngAfterViewInit(): void {
      window.addEventListener('load', () => {
      setTimeout(() => {
          const body = document.querySelector('body');
          if (body) {
              this.renderer.removeClass(body, 'intro');
          }
      }, 100);
    });
    // Re-run the template JS after Angular loads DOM
    if (typeof $ !== 'undefined') {
      (function($) {
        var $window = $(window),
            $body = $('body'),
            $wrapper = $('#wrapper');

        // Example: parallax init
        $wrapper._parallax(0.925);

        // If you want the whole script
        // you can move your pasted code here OR
        // include it in assets/js/main.js
      })($);
    }
  }
}
