import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElectricalSystemsComponent } from './electrical-systems.component';

const electricalSystemRoutes: Routes = [
  {
    path: 'electrical-systems',
    component: ElectricalSystemsComponent,
    children: []
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(electricalSystemRoutes)
  ],
  exports: [RouterModule]
})
export class ElectricalSystemsRoutingModule {}
