import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

export const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];

export const dashboardRouting = RouterModule.forChild(dashboardRoutes);

// @NgModule({
//   imports: [
//     RouterModule.forChild(dashboardRoutes)
//   ],
//   exports: [RouterModule]
// })
// export class DashboardRoutingModule {}
