// app.routes.ts
import { Routes } from '@angular/router';
import { ProjectsComponent } from './components/projects/projects.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MobileProjectsComponent } from './components/mobile-projects/mobile-projects.component';
import { OtherProjectsComponent } from './components/other-projects/other-projects.component';

export const routes: Routes = [
  { path: '', component: ProjectsComponent },
  { path: 'mobile', component: MobileProjectsComponent },
  { path: 'other', component: OtherProjectsComponent }
];
