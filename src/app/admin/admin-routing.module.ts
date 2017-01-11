import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './admin-layout/admin-layout.component';

import { electricalDevicesRoutes } from './electrical-devices/electrical-devices.routes';
import { baseUnitRoutes } from './base-units/base-units.routes';
import { userRoutes } from './users/user.routes';
import { dashboardRoutes } from './dashboard/dashboard.routes';

export const adminRoutes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [{
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
      path: '',
      children: [...dashboardRoutes]
    }]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
