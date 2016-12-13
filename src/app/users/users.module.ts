import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { UserDetailComponent } from './user-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UserListComponent,
    UserDetailComponent
    ],
    exports: [UserListComponent]
})
export class UsersModule { }
