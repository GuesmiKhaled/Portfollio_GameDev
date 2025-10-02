import { Component, OnInit } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
interface Project {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
}

@Component({
  selector: 'app-mobile-projects',
  templateUrl: './mobile-projects.component.html',
  styleUrls: ['./mobile-projects.component.css'],
  imports: [ NavComponent, CommonModule, RouterModule], // ✅ include modules here
})
export class MobileProjectsComponent implements OnInit {
  projects = [
    {
      title: 'V-Collar Application',
      subtitle: 'Android Mobile Application with Kotlin',
      description: `This is a project still under development. It aims to connect multiple collar devices (IOT)
                    and display the data to a farmer/user with useful analytics.`,
      image: 'images/pic01.jpg',
      link: '#'
    },
    {
      title: 'To Do List',
      subtitle: 'Android Mobile Application with Kotlin',
      description: 'A mobile application that stores a TODO list with add, delete, and auto-organization features.',
      image: 'images/pic02.jpg',
      link: '#'
    },
    {
      title: 'Mundy-Lingo',
      subtitle: 'Android Mobile Application with Java',
      description: 'A language learning app for English, French, German, Spanish.',
      image: 'images/pic03.jpg',
      link: '#'
    }
    // Add more projects here
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
