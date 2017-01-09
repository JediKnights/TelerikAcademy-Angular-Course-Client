import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ElectricalDevicesRoutingModule } from './electrical-devices-routing.module';

import { ElectricalDevicesComponent } from './electrical-devices.component';
import { ElectricalDevicesListComponent } from './components/electrical-devices-list/electrical-devices-list.component';
import { ElectricalDevicesDetailsComponent } from './components/electrical-devices-details/electrical-devices-details.component';
import { ElectricalDevicesEditComponent } from './components/electrical-devices-edit/electrical-devices-edit.component';

import { ElectricalDeviceService } from './services/electrical-device.service';

@NgModule({
  imports: [
    ElectricalDevicesRoutingModule,
    SharedModule
  ],
  declarations: [
    ElectricalDevicesComponent,
    ElectricalDevicesListComponent,
    ElectricalDevicesDetailsComponent,
    ElectricalDevicesEditComponent
    ],
    providers: [ElectricalDeviceService]
})
export class ElectricalDevicesModule { }
