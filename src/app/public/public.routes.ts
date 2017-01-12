import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicLayoutComponent } from './public-layout/public-layout.component';

import { electricalDevicesRoutes } from './electrical-devices/electrical-devices.routes';

import { baseUnitRoutes } from './base-units/base-units.routes';

import { userRoutes } from './users/user.routes';

import { pagesRoutes } from './pages/pages.routes';

import { electricalSystemRoutes } from './electrical-systems/electrical-systems.routes';

export const publicRoutes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: 'electrical-devices',
        children: [...electricalDevicesRoutes]
      },
      {
        path: 'base-units',
        children: [...baseUnitRoutes]
      },
      {
        path: 'users',
        children: [...userRoutes]
      },
      {
        path: 'electrical-systems',
        children: [...electricalSystemRoutes]
      },
      {
        path: '',
        children: [...pagesRoutes]
      }
    ]
  }
];

export const publicRouting = RouterModule.forChild(publicRoutes);

// Convert to routing module and eagerly load it by loadChildren property in app-roiting.module.ts after pull request:
// (https://github.com/angular/angular/pull/13676) is merged
// @NgModule({
//   imports: [
//     RouterModule.forChild(publicRoutes)
//   ],
//   exports: [RouterModule]
// })
// export class PublicRoutingModule {}
