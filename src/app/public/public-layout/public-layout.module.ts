import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import { PublicNavbarComponent } from './components/public-navbar/public-navbar.component';
import { PublicFooterComponent } from './components/public-footer/public-footer.component';
import { PublicLayoutComponent } from './public-layout.component';

@NgModule({
  imports: [
    RouterModule,
    SharedModule
  ],
  declarations: [
    PublicNavbarComponent,
    PublicFooterComponent,
    PublicLayoutComponent
  ],
  exports: [PublicLayoutComponent]
})

export class PublicLayoutModule { }
