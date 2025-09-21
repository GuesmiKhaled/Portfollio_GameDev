import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-other-projects',
  imports: [NavComponent, HeaderComponent],
  templateUrl: './other-projects.component.html',
  styleUrl: './other-projects.component.css'
})
export class OtherProjectsComponent {

}
