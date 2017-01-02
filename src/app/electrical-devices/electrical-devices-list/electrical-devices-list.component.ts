import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ElectricalDeviceService } from '../../core/electrical-device.service';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

// Helper Classes
import { ElectricalDevice } from '../electrical-device'

@Component({
  selector: 'app-electrical-devices-list',
  templateUrl: './electrical-devices-list.component.html',
  styleUrls: ['./electrical-devices-list.component.css']
})
export class ElectricalDevicesListComponent implements OnInit {

  electricalDevices: Observable<ElectricalDevice[]>

  constructor(private router: Router, private electricalDeviceService: ElectricalDeviceService) {

   }

  UpdateDevice(id:number){
    console.log("Updating Device ID:" + id)
    this.router.navigate(['/electrical-devices', id])
  }

  DeleteDevice(id:number){
    console.log("Deleting Device ID:" + id) 
  }

  ngOnInit() {
    let device = new ElectricalDevice()
    device.model = 'Samsung'
    device.id = 1
    device.electricalSystem = 'Home'
    device.serialNumber = '11FF22DE34R'

    let otherDevice = new ElectricalDevice()
    otherDevice.model = 'LG'
    otherDevice.id = 2
    otherDevice.electricalSystem = 'Work'
    otherDevice.serialNumber = '21BG32DE24P'

    let newDevice = new ElectricalDevice()
    newDevice.model = 'HiTechElectronic'
    newDevice.id = 3
    newDevice.electricalSystem = 'Space Station'
    newDevice.serialNumber = '77BG77SPC1B'

    this.electricalDevices = of([device,otherDevice, newDevice])

   // this.electricalDevices = this.electricalDeviceService.getDevices();
  }

}
