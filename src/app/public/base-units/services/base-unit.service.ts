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

  constructor (private http: Http, private errorHandler: ErrorHandler) {
    this.baseUnits = of([]);
  }

  getBaseUnits (): Observable<BaseUnit[]> {
    this.baseUnits = this.http.get(this.baseUnitsListFullUrl)
      .map((res: Response) => res.json())
      .catch(e => this.errorHandler.handleError(e));

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
          .catch(e => this.errorHandler.handleError(e));
      });
  }
}
