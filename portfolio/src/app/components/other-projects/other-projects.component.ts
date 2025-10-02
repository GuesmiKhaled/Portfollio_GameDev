import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../header/header.component";
import { NavComponent } from "../nav/nav.component";
interface Project {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
}
@Component({
  selector: 'app-other-projects',
  imports: [CommonModule, HeaderComponent, NavComponent],
  templateUrl: './other-projects.component.html',
  styleUrl: './other-projects.component.css'
})
export class OtherProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Dynamic dungeon generator',
      subtitle: '2D RogueLike Game / Tool made with Unity Engine',
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
