import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(private router: Router, private route: ActivatedRoute, private electricalDeviceService: ElectricalDeviceService) {
   }

  goToEdit(id: number) {
    this.router.navigate(['edit', id], { relativeTo: this.route });
  }

  ngOnInit() {
    this.electricalDevices = this.electricalDeviceService.getDevices();
  }
}
