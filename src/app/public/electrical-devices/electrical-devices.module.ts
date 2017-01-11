import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { ElectricalDevicesComponent } from './electrical-devices.component';
import { ElectricalDevicesListComponent } from './components/electrical-devices-list/electrical-devices-list.component';
import { ElectricalDevicesDetailsComponent } from './components/electrical-devices-details/electrical-devices-details.component';
import { ElectricalDeviceService } from './services/electrical-device.service';

// import { ElectricalDevicesRoutingModule } from './electrical-devices-routing.module';

import { electricalDevicesRouting } from './electrical-devices.routes';

@NgModule({
  imports: [
    // ElectricalDevicesRoutingModule,
    electricalDevicesRouting,
    SharedModule
  ],
  declarations: [
    ElectricalDevicesComponent,
    ElectricalDevicesListComponent,
    ElectricalDevicesDetailsComponent
    ],
  exports: [],
    providers: [ElectricalDeviceService]
})
export class ElectricalDevicesModule { }
