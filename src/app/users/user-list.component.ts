import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user';

import { UserService } from '../core/user.service';

import { Observable } from 'rxjs/Observable';

@Component({
  moduleId: 'module.id',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: Observable<User[]>;
  errorMessage = '';

  constructor(private userService: UserService, private router: Router) { }

  onSelect(user: User) {
    this.router.navigate(['/users', user.id]);
  }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }
}
