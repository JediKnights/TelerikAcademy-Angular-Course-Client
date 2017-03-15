import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import {ElectricalDevice} from '../../models/electrical-device';
import { ElectricalDeviceService} from '../../services/electrical-device.service';

@Component({
  selector: 'app-admin-electrical-device-edit',
  templateUrl: './electrical-devices-edit.component.html'
})
export class ElectricalDevicesEditComponent implements OnInit {
  electricalDevice: ElectricalDevice;

  constructor(private route: ActivatedRoute, private router: Router, private electricalDeviceService: ElectricalDeviceService) { }

  ngOnInit() {
     this.getDevice();
  }

  getDevice(): void {
    this.route.params
      .switchMap((params: Params) => this.electricalDeviceService.getElectricalDeviceById(+params['id']))
      .subscribe((electricalDevice: ElectricalDevice) => this.electricalDevice = electricalDevice);
  }

  public onSubmit(electricalDevice: ElectricalDevice) {
    this.electricalDeviceService
      .updateElectricalDevice(electricalDevice)
      .subscribe(() => {
        this.router.navigate(['/admin/electrical-devices']);
      }, (error) => {
        console.log(error);
      });
  }
}
