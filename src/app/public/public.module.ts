import { NgModule } from '@angular/core';

import { PublicLayoutModule } from './public-layout/public-layout.module';
import { BaseUnitsModule } from './base-units/base-units.module';
import { SharedModule } from '../shared/shared.module';
import { ElectricalDevicesModule } from './electrical-devices/electrical-devices.module';
import { ElectricalSystemTypesModule } from './electrical-system-types/electrical-system-types.module';
import { UserModule } from './users/user.module';
import { PagesModule } from './pages/pages.module';
// import { PublicRoutingModule } from './public-routing.module';

import { publicRouting } from './public-routing.module';

@NgModule({
  imports: [
    // PublicRoutingModule,
    publicRouting,
    BaseUnitsModule,
    ElectricalDevicesModule,
    ElectricalSystemTypesModule,
    PublicLayoutModule,
    UserModule,
    SharedModule,
    PagesModule
  ],
  declarations: []
})
export class PublicModule {
}
