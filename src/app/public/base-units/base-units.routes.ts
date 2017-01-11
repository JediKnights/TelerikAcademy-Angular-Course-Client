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

// Convert to routing module and eagerly load it by loadChildren property in public-roiting.module.ts after pull request:
// (https://github.com/angular/angular/pull/13676) is merged
// @NgModule({
//   imports: [
//     RouterModule.forChild(baseUnitRoutes)
//   ],
//   exports: [RouterModule]
// })
// export class BaseUnitsRoutingModule {}