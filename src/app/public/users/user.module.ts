import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';


import { UserComponent } from './user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

import { UserService } from '../../core/services/user.service';

// import { UserRoutingModule } from './user-routing.module';
import { userRouting } from './user.routes';

@NgModule({
  imports: [
    // UserRoutingModule,
    userRouting,
    SharedModule
  ],
  declarations: [
    UserComponent,
    UserListComponent,
    UserDetailComponent
  ],
  providers: [UserService]
})
export class UserModule { }
