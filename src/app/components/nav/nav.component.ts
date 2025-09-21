import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav id="nav">
      <ul class="links">

        <li>
          <a routerLink="" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">
            Game development projects
          </a>
        </li>
        <li>
          <a routerLink="/mobile" routerLinkActive="active">Mobile Apps projects</a>
        </li>
        <li>
          <a routerLink="/other" routerLinkActive="active">Other Projects</a>
        </li>
        <li>
          <a routerLink="/mss" routerLinkActive="active">Mss Projects</a>
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
export class NavComponent {}
