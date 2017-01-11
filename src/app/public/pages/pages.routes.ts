import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { PagesComponent } from './pages.component';

export const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/about'
      }
    ]
  }
];

export const pagesRouting = RouterModule.forChild(pagesRoutes);

// @NgModule({
//   imports: [
//     RouterModule.forChild(pagesRoutes)
//   ],
//   exports: [RouterModule]
// })
// export class PagesRoutingModule {}
