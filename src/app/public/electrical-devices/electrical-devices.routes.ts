import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElectricalDevicesComponent } from './electrical-devices.component';
import { ElectricalDevicesListComponent } from './components/electrical-devices-list/electrical-devices-list.component';
import { ElectricalDevicesDetailsComponent } from './components/electrical-devices-details/electrical-devices-details.component';

export const electricalDevicesRoutes: Routes = [
  {
    path: '',
    component: ElectricalDevicesComponent,
    children: [
      {
        path: '',
        component: ElectricalDevicesListComponent
      },
      {
        path: ':id',
        component: ElectricalDevicesDetailsComponent
      }
    ]
  }
];

export const electricalDevicesRouting = RouterModule.forChild(electricalDevicesRoutes);

// Convert to routing module and eagerly load it by loadChildren property in public-roiting.module.ts after pull request:
// (https://github.com/angular/angular/pull/13676) is merged
// @NgModule({
//   imports: [
//     RouterModule.forChild(electricalDevicesRoutes)
//   ],
//   exports: [RouterModule]
// })
// export class ElectricalDevicesRoutingModule {}
