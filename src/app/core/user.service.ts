import { Injectable } from '@angular/core';
import { User } from '../users/user';

import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';

import { DomainUrl } from '../shared/constants';

@Injectable()
export class UserService {

  private usersListUrl: string = 'api/users';

  private usersListFullUrl: string = DomainUrl + this.usersListUrl;

  private users: Observable<User[]>;

  constructor (private http: Http) {
    this.users = of([]);
  }

  getUsers (): Observable<User[]> {
    this.users = this.http.get(this.usersListFullUrl)
      .map((res: Response) => res.json())
      .catch(this.handleError);

      return this.users;
  }

  getUserById (id: number): Observable<User> {

    return this.users
      .map((users: User[]) => users.find(user => user.id === id))
      .switchMap((user: User) => {
        if (user) {
          return of(user);
        }

        return this.http.get(this.usersListFullUrl + '/' + id)
          .map((res: Response) => {
            return res.json();
          })
          .catch(this.handleError);
      });
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
