import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './admin-layout/admin-layout.component';

export const adminRoutes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: 'electrical-devices',
      loadChildren: 'app/admin/electrical-devices/electrical-devices.module#ElectricalDevicesModule'
    },
    {
      path: 'base-units',
      loadChildren: 'app/admin/base-units/base-units.module#BaseUnitsModule'
    },
    {
      path: 'users',
      loadChildren: 'app/admin/users/user.module#UserModule'
    },
    {
      path: '',
      loadChildren: 'app/admin/dashboard/dashboard.module#DashboardModule'
    }]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
