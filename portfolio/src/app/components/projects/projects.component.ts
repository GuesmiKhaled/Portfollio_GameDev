import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../header/header.component";
import { NavComponent } from "../nav/nav.component";
import { Project } from '../../domain/entities/Project';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, HeaderComponent, NavComponent],     // 👈 add this
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [
     {
      id: 1,
      title: 'Dynamic dungeon generator',
      subtitle: '2D RogueLike Game / Tool made with Unity Engine',
      description: 'Individual project generating several maps dynamically.',
      image: './images/dungeon_generator/dungeon_generator.png',
      link: 'unity/dungeon_generator.html'
    },
    {
      id: 2,
      title: 'Last Stand 2D',
      subtitle: '2D Platformer Game with Unity Engine',
      description: 'This is a platformer game where the player is a soldier fighting for his planet who got invaded by space pirates.<br/>This game is more like a project to test out many features, to know more about the project can be found on this github ',
      image: './images/last_stand/last_stand_feature.png',
      link: ''
    },
    {
      id: 3,
      title: 'The Journey 2D',
      subtitle: '2D Platformer Game with Unity Engine',
      description: 'The game is about a little warrior trying to cross a dungeon while evading traps and monsters. Weapons , potions , powerfull monster are waiting for the player, deadly water , poison mists and more.',
      image: './images/journey/the_journey_preview.png',
      link: 'unity/dungeon_generator.html'
    },
    {
      id: 4,
      title: 'Attack on Titans Fan Game',
      subtitle: '3D Game with Unity Engine & Blender',
      description: 'This project is a fanbase project with many trying to contribute to this. For my part I did a bit of remodeling for most of the assets and added new features.',
      image: './images/aot/aot_preview.jpg',
      link: ''
    },
    {
      id: 5,
      title: 'Onboarding Simulator',
      subtitle: '3D Game with Unity Engine & Blender & C# backend & sql database',
      description: ' Gamification type of project where I took the HR Onboarding process and made a Unity game out of it,this game game be manipulated via Rest API (.NET 3.1 & C#) and a page web where we can change the content of the game. ',
      image: './images/onboarding/onb_preview.png',
      link: ''
    },
    {
      id: 6,
      title: 'Planet Creator ',
      subtitle: '3D Game Tool with Unity Engine',
      description: 'Planet Creator is a tool I made using Unity Editor scripts and Library where we can tweek and change Unity engine itself to get the result that is making a custom Planet. By changing simple setups the planet looks change each time.',
      image: './images/planet cretor/planet_creator_preview.png',
      link: ''
    },
    {
      id: 7,
      title: 'Boozman: Fallout Stairs',
      subtitle: '3D Game with Unity Engine & Blender',
      description: 'Boozman or Fallout Stairs is a 3D mini game where the player is a drunk man who fall endlessly on a stair . The objectives of the player are to collect bear along the path as well avoiding all traps , holes , walls and much more that can stop or slow the player fall.',
      image: './images/boozman/boozman_preview.png',
      link: 'https://github.com/GuesmiKhaled/Fallout_Stairs'
    }
  ];

  currentPage = 1;
  itemsPerPage = 4;
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
