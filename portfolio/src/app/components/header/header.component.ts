import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  headerTitle: string = '';
  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.headerTitle$.subscribe(title => {
      this.headerTitle = title;
    });
  }

    scrollToSection(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  scrollToSection2(sectionId: string) {
  const el = document.getElementById(sectionId);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 80; // 80px offset
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}
}
