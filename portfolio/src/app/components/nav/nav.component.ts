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
  template: `
    <nav id="nav">
      <ul class="links">

        <li [ngClass]="{ active: isGameDevActive() }">
          <a routerLink="/GameDev"
           routerLinkActive="active"
           [routerLinkActiveOptions]="{ exact: true }"
           (click)="setHeader('Game Developer')">
            Game development projects
          </a>
        </li>
        <li [ngClass]="{ active: isMobileDevActive() }">
          <a routerLink="/MobileDev"
          routerLinkActive="active"
          (click)="setHeader('Mobile Apps Developer')">Mobile Apps projects</a>
        </li>
        <!-- <li>
          <a routerLink="/KhaledGuesmi/other" routerLinkActive="active">Other Projects</a>
        </li> -->
        <li [ngClass]="{ active: isMssProjectsActive() }">
          <a routerLink="/FullStack"
           routerLinkActive="active"
           (click)="setHeader('Full Stack Developer .Net/Angular')">Mss Projects</a>

        </li>
      </ul>
      <ul class="icons">
        <li>
          <a href="https://linkedin.com/in/khaled-guesmi/" class="icon brands fa-linkedin-in" target="_blank"></a>
        </li>
        <li>
          <a href="https://thunderkill.itch.io" class="icon brands fa-itch-io" target="_blank"></a>
        </li>
        <li>
          <a href="https://github.com/Thunderkilll" class="icon brands fa-github" target="_blank"></a>
        </li>
      </ul>
    </nav>
  `
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
