import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElectricalDevicesComponent } from './electrical-devices.component';
import { ElectricalDevicesListComponent } from './electrical-devices-list/electrical-devices-list.component';
// import { UserListComponent } from './user-list.component';

const ElectricalDevicesRoutes: Routes = [
  {
    path: 'electrical-devices',
    component: ElectricalDevicesComponent,
    children: [
      {
        path: '',
        component: ElectricalDevicesListComponent
      }
      // {
      //   path: ':id',
      //   component: UserDetailComponent
      // }
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
