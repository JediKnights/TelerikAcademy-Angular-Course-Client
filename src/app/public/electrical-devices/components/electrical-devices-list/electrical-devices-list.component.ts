import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ElectricalDeviceService } from '../../services/electrical-device.service';

import { Observable } from 'rxjs/Observable';
// import { of } from 'rxjs/observable/of';

import { ElectricalDevice } from '../../models/electrical-device';

@Component({
  selector: 'app-electrical-devices-list',
  templateUrl: './electrical-devices-list.component.html'
})
export class ElectricalDevicesListComponent implements OnInit {

  electricalDevices: Observable<ElectricalDevice[]>;

  constructor(private router: Router, private electricalDeviceService: ElectricalDeviceService) {

   }

  UpdateDevice(id: number){
    console.log('Updating Device ID:' + id);
    this.router.navigate(['/electrical-devices', id]);
  }

  DeleteDevice(id: number){
    console.log('Deleting Device ID:' + id);
  }

  ngOnInit() {
    this.electricalDevices = this.electricalDeviceService.getDevices();
  }
}
