import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../domain/entities/Project';

@Component({
  selector: 'app-project-list',
 imports: [CommonModule],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css',
  encapsulation: ViewEncapsulation.None  // 👈 add this line

})
export class ProjectListComponentComponent  implements OnInit {
  @Input() projects: Project[] = [];
  @Input() itemsPerPage: number = 4;
  @Input() showHeader: boolean = true; // Optional control

  currentPage = 1;
  pagedProjects: Project[] = [];
  pages: number[] = [];
  totalPages = 0;

  ngOnInit() {
    this.calculatePages();
  }

  calculatePages() {
  const otherProjects = this.projects.filter(p => p.id !== 1);
  this.totalPages = Math.ceil(otherProjects.length / this.itemsPerPage);
  this.updatePage();
  }

  updatePage() {
    const others = this.otherProjects;
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.pagedProjects = others.slice(start, end);
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