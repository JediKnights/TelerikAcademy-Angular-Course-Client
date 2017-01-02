import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';

import { DomainUrl } from '../shared/constants';

import {ElectricalDevice} from '../electrical-devices/electrical-device'

@Injectable()
export class ElectricalDeviceService {
  private electricalDevicesAPI_URL: string = 'api/electricalDevices';

  private electricalDevicesListURL: string = DomainUrl + this.electricalDevicesAPI_URL;

  private electricalDevices: Observable<ElectricalDevice[]>
  
  constructor (private http: Http) {
    this.electricalDevices = of([]);
  }

   getDevices (): Observable<ElectricalDevice[]> {

    this.electricalDevices = this.http.get(this.electricalDevicesListURL)
      .map((res: Response) => res.json())
      .catch(this.handleError);

      return this.electricalDevices;
  }

  getDeviceById (id: number):  Observable<ElectricalDevice[]> {

    return this.electricalDevices
      .map((electricalDevices: ElectricalDevice[]) => electricalDevices.find(user => user.id === id))
      .switchMap((electricalDevices: ElectricalDevice) => {
        if (electricalDevices) {
          return of(electricalDevices);
        }

        return this.http.get(this.electricalDevicesListURL + '/' + id)
          .map((res: Response) => {
            return res.json();
          })
          .catch(this.handleError);
      });
  }

  // Error hendler - can be exported in single class to be reusable
   private handleError (error: Response | any) {
    let errMsg: string;

    if (error instanceof Response) {
      const body = error.json() || '';

      const err = body.error || JSON.stringify(body);

      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    console.error(errMsg);

    return Observable.throw(errMsg);
  }

}
