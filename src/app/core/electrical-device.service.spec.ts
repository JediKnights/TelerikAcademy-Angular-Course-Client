/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ElectricalDeviceService } from './electrical-device.service';

describe('ElectricalDeviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ElectricalDeviceService]
    });
  });

  it('should ...', inject([ElectricalDeviceService], (service: ElectricalDeviceService) => {
    expect(service).toBeTruthy();
  }));
});
