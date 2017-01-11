import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

// import { DashboardRoutingModule } from './dashboard-routing.module';
import { dashboardRouting } from './dashboard.routes';

import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    // DashboardRoutingModule,
    dashboardRouting,
    SharedModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
