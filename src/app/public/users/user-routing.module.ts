import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserListComponent } from './components/user-list/user-list.component';

export const userRoutes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        component: UserListComponent
      },
      {
        path: ':id',
        component: UserDetailComponent
      }
    ]
  }
];

export const userRouting = RouterModule.forChild(userRoutes);

// @NgModule({
//   imports: [
//     RouterModule.forChild(userRoutes)
//   ],
//   exports: [RouterModule]
// })
// export class UserRoutingModule {}
