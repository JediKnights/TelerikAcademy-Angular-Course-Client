import { Injectable } from '@angular/core';
import { User } from '../models/user';

import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';

import { DomainUrl } from '../../shared/constants/constants';
import { ErrorHandler } from '../../shared/handlers/error-handler';

@Injectable()
export class UserService {

  private usersListUrl: string = 'api/persons';

  private usersListFullUrl: string = DomainUrl + this.usersListUrl;

  private users: Observable<User[]>;

  constructor (private http: Http, private errorHandler: ErrorHandler) {
    this.users = of([]);
  }

  getUsers (): Observable<User[]> {
    this.users = this.http.get(this.usersListFullUrl)
      .map((res: Response) => res.json())
      .catch(e => this.errorHandler.handleError(e));

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
          .catch(this.errorHandler.handleError);
      });
  }
}
