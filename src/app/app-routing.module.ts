import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').then((m) => m.HomeModule),
  },
  
  {
    path: 'about-me',
    loadChildren: () => import('./components/about-me/about-me.module').then((m) => m.AboutMeModule),
  },
  {
    path: 'resume',
    loadChildren: () => import('./components/resume/resume.module').then((m) => m.ResumeModule),
  },
  {
    path: 'portfolio',
    loadChildren: () => import('./components/portfolio/portfolio.module').then((m) => m.PortfolioModule),
  },
  {
    path: 'contact',
    loadChildren: () => import('./components/contact/contact.module').then((m) => m.ContactModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
