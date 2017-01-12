import { NgModule } from '@angular/core';

// import { DashboardRoutingModule } from './dashboard-routing.module';
import { dashboardRouting } from './dashboard.routes';
import { SharedModule } from '../../shared/shared.module';

import { DashboardComponent } from './dashboard.component';
import { DashboardWidgetsComponent } from './components/dashboard-widgets/dashboard-widgets.component';
import { BatteryChargeLevelComponent } from './components/battery-charge-level/battery-charge-level.component';

@NgModule({
  imports: [
    // DashboardRoutingModule,
    dashboardRouting,
    SharedModule
  ],
  declarations: [
    DashboardComponent,
    DashboardWidgetsComponent,
    BatteryChargeLevelComponent
  ]
})
export class DashboardModule { }
