import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElectricalSystemTypesComponent } from './electrical-system-types.component';

import { ElectricalSystemTypeDetailsComponent }
  from './components/electrical-system-type-details/electrical-system-type-details.component';

const electricalSystemTypesRoutes: Routes = [
  {
    path: 'electrical-system-types',
    component: ElectricalSystemTypesComponent,
    children: [
      {
        path: ':id',
        component: ElectricalSystemTypeDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(electricalSystemTypesRoutes)
  ],
  exports: [RouterModule]
})
export class ElectricalSystemTypesRoutingModule {}
