import { Component, OnInit } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
}
@Component({
  selector: 'app-mss-projects',
    imports: [CommonModule, HeaderComponent, NavComponent],
  templateUrl: './mss-projects.component.html',
  styleUrl: './mss-projects.component.css'


})
export class MssProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'MPay Mobile Payment Tunisia',
      subtitle: 'Mobile app for digital payment with wallets and bank cards',
      description: 'Individual project generating several maps dynamically.',
      image: './images/MSS/tunis/atb/home.png',
      link: 'unity/dungeon_generator.html'
    },
    {
      title: 'Switch Mobile Payment Tunisia',
      subtitle: 'Mobile app for digital payment with wallets and bank cards',
      description: 'Individual project generating several maps dynamically.',
      image: './images/MSS/tunis/stb/login.png',
      link: 'unity/dungeon_generator.html'
    },
    {
      title: 'Portal Mobile Payment Tunisie',
      subtitle: 'Mobile app for digital payment with wallets and bank cards in angular',
      description: 'Individual project generating several maps dynamically.',
      image: './images/MSS/tunis/portail/portal.png',
      link: 'unity/dungeon_generator.html'
    },
    {
      title: 'NumoPay -Mobile Payment Lybia-',
      subtitle: 'Mobile app for digital payment with wallets and bank cards',
      description: 'Individual project generating several maps dynamically.',
      image: './images/MSS/numo/numoPayPro1.png',
      link: 'unity/dungeon_generator.html'
    },
    {
      title: 'Mobile Payment Bank of Afrika',
      subtitle: 'Mobile app for digital payment with wallets and bank cards',
      description: 'Individual project generating several maps dynamically.',
      image: './images/MSS/boa/mpay_boa_0.png',
      link: 'unity/dungeon_generator.html'
    },
    {
      title: 'Portal Payment Bank of Afrika',
      subtitle: 'Mobile app for digital payment with wallets and bank cards',
      description: 'Individual project generating several maps dynamically.',
      image: './images/MSS/boa/mpay_boa_1.png',
      link: 'unity/dungeon_generator.html'
    },
    {
      title: 'Portal Vista for Bank of Afrika',
      subtitle: 'Mobile app for digital payment with wallets and bank cards',
      description: 'Individual project generating several maps dynamically.',
      image: './images/MSS/boa/portalVista.png',
      link: 'unity/dungeon_generator.html'
    },
    {
      title: 'Mobile Payment FransaBank Algeria',
      subtitle: 'Mobile app for digital payment with wallets and bank cards',
      description: 'Individual project generating several maps dynamically.',
      image: './images/dungeon_generator/dungeon_generator.png',
      link: 'unity/dungeon_generator.html'
    }
  ];

  currentPage = 1;
  itemsPerPage = 6;
  pagedProjects: Project[] = [];
  pages: number[] = [];
  totalPages = 0;

  ngOnInit() {
    this.totalPages = Math.ceil(this.projects.length / this.itemsPerPage);
    this.updatePage();
  }

  updatePage() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.pagedProjects = this.projects.slice(start, end);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.updatePage();
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePage();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePage();
    }
  }
}
