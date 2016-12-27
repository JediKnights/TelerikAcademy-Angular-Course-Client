import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/user.service';

@Component({
  moduleId: 'module.id',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users = [];
  errorMessage = '';

  constructor(private userService: UserService) { }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(
        users => this.users = users,
        error =>  this.errorMessage = <any>error);
  }

  ngOnInit() {
    this.getUsers();
  }
}
