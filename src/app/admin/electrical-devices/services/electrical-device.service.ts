import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';

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

  private errorHandler: ErrorHandler;

  constructor (private http: Http, private errHandler: ErrorHandler) {
    this.electricalDevices = of([]);
    this.errorHandler = errHandler;
  }

   getDevices (): Observable<ElectricalDevice[]> {

    this.electricalDevices = this.http.get(this.electricalDevicesListFullUrl)
      .map((res: Response) => res.json())
      .catch(e => this.errorHandler.handleError(e));

      return this.electricalDevices;
  }

  getElectricalDeviceById (id: number):  Observable<ElectricalDevice> {

    return this.electricalDevices
      .map((electricalDevices: ElectricalDevice[]) => electricalDevices.find(device => device.id === id))
      .switchMap((electricalDevice: ElectricalDevice) => {
        // if (electricalDevice) {
        //   return of(electricalDevice);
        // }

        return this.http.get(this.electricalDevicesListFullUrl + '/' + id)
          .map((res: Response) => {
            return res.json();
          })
          .catch(e => this.errorHandler.handleError(e));
      });
  }

  createElectricalDevice (electricalDevice: ElectricalDevice) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.electricalDevicesListFullUrl, electricalDevice, options)
      .map(this.extractData)
      .catch(this.errorHandler.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  updateElectricalDevice (electricalDevice: ElectricalDevice): Observable<ElectricalDevice[]> {

     let bodyString = JSON.stringify(electricalDevice);

     let headers = new Headers({ 'Content-Type': 'application/json' });

     let options = new RequestOptions({ headers: headers });

     let url = `${this.electricalDevicesListFullUrl}/${electricalDevice.id}`;

     return this.http.put(url, bodyString, options)
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
   }

   deleteElectricalDevice (id: string): Observable<ElectricalDevice[]> {

    let url = `${this.electricalDevicesListFullUrl}/${id}`;

     return this.http.delete(url)
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
