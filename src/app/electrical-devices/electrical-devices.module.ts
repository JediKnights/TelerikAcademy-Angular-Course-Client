import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElectricalDevicesComponent } from './electrical-devices.component';
import { ElectricalDevicesListComponent } from './electrical-devices-list/electrical-devices-list.component';

import { ElectricalDevicesRoutesModule } from './electrical-devices-routing.module'
@NgModule({
  imports: [
    CommonModule,
    ElectricalDevicesRoutesModule
  ],
  declarations: [
    ElectricalDevicesComponent, 
    ElectricalDevicesListComponent
    ]
})
export class ElectricalDevicesModule { }
