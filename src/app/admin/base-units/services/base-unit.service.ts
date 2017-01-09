import { Injectable } from '@angular/core';
import { BaseUnit } from '../models/base-unit';

import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';

import { DomainUrl } from '../../../shared/constants/constants';
import { ErrorHandler } from '../../../shared/handlers/error-handler';

@Injectable()
export class BaseUnitService {

  private baseUnitsListUrl: string = 'api/baseunits';

  private baseUnitsListFullUrl: string = DomainUrl + this.baseUnitsListUrl;

  private baseUnits: Observable<BaseUnit[]>;

  private errorHandler: ErrorHandler;

  constructor (private http: Http, private errHandler: ErrorHandler) {
    this.baseUnits = of([]);
    this.errorHandler = errHandler;
  }

  getBaseUnits (): Observable<BaseUnit[]> {
    this.baseUnits = this.http.get(this.baseUnitsListFullUrl)
      .map((res: Response) => res.json())
      .catch(this.errorHandler.handleError);

      return this.baseUnits;
  }

  getById (id: number): Observable<BaseUnit> {

    return this.baseUnits
      .map((baseUnits: BaseUnit[]) => baseUnits.find(bu => bu.id === id))
      .switchMap((baseUnit: BaseUnit) => {
        if (baseUnit) {
          return of(baseUnit);
        }

        return this.http.get(this.baseUnitsListFullUrl + '/' + id)
          .map((res: Response) => {
            return res.json();
          })
          .catch(this.errorHandler.handleError);
      });
  }

  createBaseUnit (baseUnit: BaseUnit) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.baseUnitsListFullUrl, baseUnit, options)
      .map(this.extractData)
      .catch(this.errorHandler.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

   updateBaseUnit (baseUnit: BaseUnit): Observable<BaseUnit[]> {

     let bodyString = JSON.stringify(baseUnit);

     let headers = new Headers({ 'Content-Type': 'application/json' });

     let options = new RequestOptions({ headers: headers });

     let url = `${this.baseUnitsListFullUrl}/${baseUnit.id}`;

     return this.http.put(url, bodyString, options)
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
   }

   deleteBaseUnit (id: string): Observable<BaseUnit[]> {

    let url = `${this.baseUnitsListFullUrl}/${id}`;

     return this.http.delete(url)
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
