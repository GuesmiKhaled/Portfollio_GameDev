import { Component, OnInit } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { Project } from '../../domain/entities/Project';
@Component({
  selector: 'app-mss-projects',
    imports: [CommonModule, HeaderComponent, NavComponent],
  templateUrl: './mss-projects.component.html',
  styleUrl: './mss-projects.component.css'
})
export class MssProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      id: 1,
      title: 'MPay Mobile Payment Tunisia',
      subtitle: 'Mobile app for digital payment with wallets and bank cards',
      description: 'Individual project generating several maps dynamically.',
      image: './images/MSS/tunis/atb/home.png',
      link: 'unity/dungeon_generator.html'
    },
    {
      id: 2,
      title: 'Switch Mobile Payment Tunisia',
      subtitle: 'Mobile app for digital payment with wallets and bank cards',
      description: 'Individual project generating several maps dynamically.',
      image: './images/MSS/tunis/stb/login.png',
      link: 'unity/dungeon_generator.html'
    },
    {
       id: 3,
      title: 'Portal Mobile Payment Tunisie',
      subtitle: 'Mobile app for digital payment with wallets and bank cards in angular',
      description: 'Individual project generating several maps dynamically.',
      image: './images/MSS/tunis/portail/portal.png',
      link: 'unity/dungeon_generator.html'
    },
    {
       id: 4,
      title: 'NumoPay -Mobile Payment Lybia-',
      subtitle: 'Mobile app for digital payment with wallets and bank cards',
      description: 'Individual project generating several maps dynamically.',
      image: './images/MSS/numo/numoPayPro1.png',
      link: 'unity/dungeon_generator.html'
    },
    {
        id: 5,
      title: 'Mobile Payment Bank of Afrika',
      subtitle: 'Mobile app for digital payment with wallets and bank cards',
      description: 'Individual project generating several maps dynamically.',
      image: './images/MSS/boa/mpay_boa_0.png',
      link: 'unity/dungeon_generator.html'
    },
    {
        id: 6,
      title: 'Portal Payment Bank of Afrika',
      subtitle: 'Mobile app for digital payment with wallets and bank cards',
      description: 'Individual project generating several maps dynamically.',
      image: './images/MSS/boa/mpay_boa_1.png',
      link: 'unity/dungeon_generator.html'
    },
    {
        id: 7,
      title: 'Portal Vista for Bank of Afrika',
      subtitle: 'Mobile app for digital payment with wallets and bank cards',
      description: 'Individual project generating several maps dynamically.',
      image: './images/MSS/boa/portalVista.png',
      link: 'unity/dungeon_generator.html'
    },
    {
        id: 8,
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
  const otherProjects = this.projects.filter(p => p.id !== 1);
  this.totalPages = Math.ceil(otherProjects.length / this.itemsPerPage);
  this.updatePage();
  }

updatePage() {
  const otherProjects = this.projects.filter(p => p.id !== 1);
  const start = (this.currentPage - 1) * this.itemsPerPage;
  const end = start + this.itemsPerPage;
  this.pagedProjects = otherProjects.slice(start, end);
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
   get featuredProject() {
    return this.projects.find(p => p.id === 1);
  }
   get otherProjects() {
    return this.projects.filter(p => p.id !== 1);
  }
}
