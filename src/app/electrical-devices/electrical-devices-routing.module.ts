import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElectricalDevicesComponent } from './electrical-devices.component';
import { ElectricalDevicesListComponent } from './electrical-devices-list/electrical-devices-list.component';
import { ElectricalDeviceDetailsComponent } from './electrical-device-details/electrical-device-details.component'

const ElectricalDevicesRoutes: Routes = [
  {
    path: 'electrical-devices',
    component: ElectricalDevicesComponent,
    children: [
      {
        path: '',
        component: ElectricalDevicesListComponent
      },
      {
        path: ':id',
        component: ElectricalDeviceDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ElectricalDevicesRoutes)
  ],
  exports: [RouterModule]
})
export class ElectricalDevicesRoutesModule { }
