import { Component, OnInit } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { Project } from '../../domain/entities/Project';
@Component({
  selector: 'app-mobile-projects',
  templateUrl: './mobile-projects.component.html',
  styleUrls: ['./mobile-projects.component.css'],
  imports: [NavComponent, CommonModule, RouterModule, HeaderComponent], // ✅ include modules here
})
export class MobileProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      id: 1,
      title: 'V-Collar Application',
      subtitle: 'Android Mobile Application with Kotlin',
      description: `This is a project still under development. It aims to connect multiple collar devices (IOT)
                    and display the data to a farmer/user with useful analytics.`,
      image: 'images/pic01.jpg',
      link: '#'
    },
    {
       id: 1,
      title: 'To Do List',
      subtitle: 'Android Mobile Application with Kotlin',
      description: 'A mobile application that stores a TODO list with add, delete, and auto-organization features.',
      image: 'images/pic02.jpg',
      link: '#'
    },
    {
       id: 1,
      title: 'Mundy-Lingo',
      subtitle: 'Android Mobile Application with Java',
      description: 'A language learning app for English, French, German, Spanish.',
      image: 'images/pic03.jpg',
      link: '#'
    }
  ];
currentPage = 1;
  itemsPerPage = 4;
  pagedProjects: any[] = [];
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
