import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicLayoutComponent } from './public-layout/public-layout.component';

import { electricalDevicesRoutes } from './electrical-devices/electrical-devices-routing.module';

import { baseUnitRoutes } from './base-units/base-units-routing.module';

import { userRoutes } from './users/user-routing.module';

import { pagesRoutes } from './pages/pages-routing.module';

export const publicRoutes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: 'electrical-devices',
        // loadChildren: 'app/public/electrical-devices/electrical-devices.module#ElectricalDevicesModule'
        children: [...electricalDevicesRoutes]
      },
      {
        path: 'base-units',
        // loadChildren: 'app/public/base-units/base-units.module#BaseUnitsModule'
        children: [...baseUnitRoutes]
      },
      {
        path: 'users',
        // loadChildren: 'app/public/users/user.module#UserModule'
        children: [...userRoutes]
      },
      {
        path: '',
        // loadChildren: 'app/public/pages/pages.module#PagesModule'
        children: [...pagesRoutes]
      },
    ]
  }
];

export const publicRouting = RouterModule.forChild(publicRoutes);

// @NgModule({
//   imports: [
//     RouterModule.forChild(publicRoutes)
//   ],
//   exports: [RouterModule]
// })
// export class PublicRoutingModule {}
