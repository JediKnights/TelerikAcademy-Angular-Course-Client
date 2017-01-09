import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

import { AdminHeaderComponent } from './components/admin-navbar/admin-navbar.component';
import { AdminFooterComponent } from './components/admin-footer/admin-footer.component';
import { AdminLayoutComponent } from './admin-layout.component';

@NgModule({
  imports: [
    RouterModule,
    SharedModule
  ],
  declarations: [
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminLayoutComponent
  ]
})
export class AdminLayoutModule { }
