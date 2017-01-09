import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';

import { DomainUrl } from '../../../shared/constants/constants';
import { ElectricalDevice } from '../models/electrical-device';
import { ErrorHandler } from '../../../shared/handlers/error-handler';

@Injectable()
export class ElectricalDeviceService {
  private electricalDevicesListUrl: string = 'api/electricaldevices';

  private electricalDevicesListFullUrl: string = DomainUrl + this.electricalDevicesListUrl;

  private electricalDevices: Observable<ElectricalDevice[]>;

  constructor (private http: Http, private errorHandler: ErrorHandler) {
    this.electricalDevices = of([]);
  }

   getDevices (): Observable<ElectricalDevice[]> {

    this.electricalDevices = this.http.get(this.electricalDevicesListFullUrl)
      .map((res: Response) => res.json())
      .catch(e => this.errorHandler.handleError(e));

      return this.electricalDevices;
  }

  getDeviceById (id: number):  Observable<ElectricalDevice> {

    return this.electricalDevices
      .map((electricalDevices: ElectricalDevice[]) => electricalDevices.find(device => device.id === id))
      .switchMap((electricalDevice: ElectricalDevice) => {
        if (electricalDevice) {
          return of(electricalDevice);
        }

        return this.http.get(this.electricalDevicesListFullUrl + '/' + id)
          .map((res: Response) => {
            return res.json();
          })
          .catch(e => this.errorHandler.handleError(e));
      });
  }
}
