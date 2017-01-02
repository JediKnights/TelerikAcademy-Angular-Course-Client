import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { ElectricalDeviceService} from './electrical-device.service'

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    UserService,
    ElectricalDeviceService
    ]
})
export class CoreModule { }
