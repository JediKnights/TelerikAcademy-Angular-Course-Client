import { Injectable } from '@angular/core';
import { ElectricalSystemType } from '../models/electrical-system-type';

import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';

import { DomainUrl } from '../../../shared/constants/constants';
import { ErrorHandler } from '../../../shared/handlers/error-handler';

@Injectable()
export class ElectricalSystemTypeService {

  private electricalSystemTypesListUrl: string = 'api/electricalsystemtypes';

  private electricalSystemTypesFullUrl: string = DomainUrl + this.electricalSystemTypesListUrl;

  private electricalSystemTypes: Observable<ElectricalSystemType[]>;

  constructor (private http: Http, private errorHandler: ErrorHandler) {
    this.electricalSystemTypes = of([]);
  }

  getElectricalSystemTypes (): Observable<ElectricalSystemType[]> {
    this.electricalSystemTypes = this.http.get(this.electricalSystemTypesFullUrl)
      .map((res: Response) => res.json())
      .catch(e => this.errorHandler.handleError(e));

      return this.electricalSystemTypes;
  }

  getElectricalSystemTypeById (id: number): Observable<ElectricalSystemType> {

    return this.electricalSystemTypes
      .map((electricalSystemTypes: ElectricalSystemType[]) => electricalSystemTypes.find(est => est.id === id))
      .switchMap((electricalSystemType: ElectricalSystemType) => {
        if (electricalSystemType) {
          return of(electricalSystemType);
        }

        return this.http.get(this.electricalSystemTypesFullUrl + '/' + id)
          .map((res: Response) => {
            return res.json();
          })
          .catch(e => this.errorHandler.handleError(e));
      });
  }
}
