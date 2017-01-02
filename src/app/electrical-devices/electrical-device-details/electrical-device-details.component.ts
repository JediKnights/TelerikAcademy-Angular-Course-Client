import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import {ElectricalDevice} from '../electrical-device'
import { ElectricalDeviceService} from '../../core/electrical-device.service'

@Component({
  selector: 'app-electrical-device-details',
  templateUrl: './electrical-device-details.component.html',
  styleUrls: ['./electrical-device-details.component.css']
})
export class ElectricalDeviceDetailsComponent implements OnInit {

  electricalDevice: ElectricalDevice

  constructor(private route: ActivatedRoute, private electricalDeviceService: ElectricalDeviceService) { }

  ngOnInit() {
     this.route.params
      .switchMap((params: Params) => this.electricalDeviceService.getDeviceById(+params['id']))
      .subscribe((electricalDevice: ElectricalDevice) => this.electricalDevice = electricalDevice);
  }

}
