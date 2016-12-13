import { Injectable } from '@angular/core';
import { User } from '../users/user';

import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { DomainUrl } from '../shared/constants';

@Injectable()
export class UserService {

  private usersListUrl: string = 'api/users';

  private fullUsersListUrl: string = DomainUrl + this.usersListUrl;

  constructor (private http: Http) {}

  getUsers (): Observable<User[]> {
    return this.http.get(this.fullUsersListUrl)
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
  }

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
