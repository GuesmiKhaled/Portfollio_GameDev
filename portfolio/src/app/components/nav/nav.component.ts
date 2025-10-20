import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';

declare var $: any;   // expose jQuery
declare var breakpoints: any;
declare var browser: any;
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav.component.html'
})
export class NavComponent implements AfterViewInit {


  setHeader(title: string) {
    this.sharedService.setHeaderTitle(title);
  }
  ngAfterViewInit(): void {
    // Re-run the template JS after Angular loads DOM
    if (typeof $ !== 'undefined') {
      (function($) {
        var $window = $(window),
            $body = $('body'),
            $wrapper = $('#wrapper');

        // Example: parallax init
        $wrapper._parallax(0.925);
      })($);
    }
  }
isMssProjectsActive(): any {
    return this.router.isActive('/FullStack', { paths: 'exact', queryParams: 'ignored', fragment: 'ignored', matrixParams: 'ignored' });

}
isMobileDevActive(): any {
    return this.router.isActive('/MobileDev', { paths: 'exact', queryParams: 'ignored', fragment: 'ignored', matrixParams: 'ignored' });

}

  constructor(private router: Router,private sharedService: SharedService) {}

  isGameDevActive(): boolean {
    return this.router.isActive('/GameDev', { paths: 'exact', queryParams: 'ignored', fragment: 'ignored', matrixParams: 'ignored' });
  }
}
