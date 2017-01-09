import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElectricalDevicesComponent } from './electrical-devices.component';
import { ElectricalDevicesListComponent } from './components/electrical-devices-list/electrical-devices-list.component';
import { ElectricalDevicesDetailsComponent } from './components/electrical-devices-details/electrical-devices-details.component';

const electricalDevicesRoutes: Routes = [
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

@NgModule({
  imports: [
    RouterModule.forChild(electricalDevicesRoutes)
  ],
  exports: [RouterModule]
})
export class ElectricalDevicesRoutingModule {}
