import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { DashboardWidgetsComponent } from './components/dashboard-widgets/dashboard-widgets.component';

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/admin/dashboard'
      },
      {
        path: 'dashboard',
        component: DashboardWidgetsComponent
      }
    ]
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
