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

  goToDetails(id: number){
    this.router.navigate(['/electrical-devices', id]);
  }

  ngOnInit() {
    this.electricalDevices = this.electricalDeviceService.getDevices();
  }
}
