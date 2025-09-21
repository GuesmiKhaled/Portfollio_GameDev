import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { NavComponent } from "../nav/nav.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mobile-projects',
  templateUrl: './mobile-projects.component.html',
  styleUrls: ['./mobile-projects.component.css'],
  imports: [ NavComponent, CommonModule, RouterModule], // ✅ include modules here
})
export class MobileProjectsComponent {
  mobileProjects = [
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
}
