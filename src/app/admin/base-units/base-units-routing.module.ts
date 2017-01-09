import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseUnitsComponent } from './base-units.component';
import { BaseUnitListComponent } from './components/base-unit-list/base-unit-list.component';
import { BaseUnitCreateComponent } from './components/base-unit-create/base-unit-create.component';
import { BaseUnitEditComponent } from './components/base-unit-edit/base-unit-edit.component';

const baseUnitRoutes: Routes = [
  {
    path: '',
    component: BaseUnitsComponent,
    children: [
      {
        path: '',
        component: BaseUnitListComponent
      },
      {
        path: 'create',
        component: BaseUnitCreateComponent
      },
      {
        path: 'edit/:id',
        component: BaseUnitEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(baseUnitRoutes)
  ],
  exports: [RouterModule]
})
export class BaseUnitsRoutingModule {}
