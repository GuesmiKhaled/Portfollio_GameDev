import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-mss-projects',
  imports: [NavComponent, FooterComponent],
  templateUrl: './mss-projects.component.html',
  styleUrl: './mss-projects.component.css'
})
export class MssProjectsComponent {

}
