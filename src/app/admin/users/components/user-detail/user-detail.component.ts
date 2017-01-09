import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { User } from '../../../../core/models/user';
import { UserService } from '../../../../core/services/user.service';

@Component({
  moduleId: 'module.id',
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent implements OnInit {

  public user: User;
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.userService.getUserById(+params['id']))
      .subscribe((user: User) => this.user = user);
  }
}
