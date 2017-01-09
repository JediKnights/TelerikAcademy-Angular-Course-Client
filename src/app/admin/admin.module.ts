import { NgModule } from '@angular/core';
import { AdminLayoutModule } from './admin-layout/admin-layout.module';
import {AdminRoutingModule} from './admin-routing.module';

import { BaseUnitsModule } from './base-units/base-units.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ElectricalDevicesModule } from './electrical-devices/electrical-devices.module';
import { ElectricalSystemTypesModule } from './electrical-system-types/electrical-system-types.module';
import { UserModule } from './users/user.module';

@NgModule({
  imports: [
    AdminRoutingModule,
    AdminLayoutModule,
    BaseUnitsModule,
    DashboardModule,
    SharedModule,
    ElectricalDevicesModule,
    ElectricalSystemTypesModule,
    UserModule
  ]
})
export class AdminModule {
}
