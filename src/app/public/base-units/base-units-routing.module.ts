import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseUnitsComponent } from './base-units.component';

import { BaseUnitListComponent } from './components/base-unit-list/base-unit-list.component';

export const baseUnitRoutes: Routes = [
  {
    path: '',
    component: BaseUnitsComponent,
    children: [
      {
        path: '',
        component: BaseUnitListComponent
      }
    ]
  }
];

export const baseUnitRouting = RouterModule.forChild(baseUnitRoutes);

// @NgModule({
//   imports: [
//     RouterModule.forChild(baseUnitRoutes)
//   ],
//   exports: [RouterModule]
// })
// export class BaseUnitsRoutingModule {}