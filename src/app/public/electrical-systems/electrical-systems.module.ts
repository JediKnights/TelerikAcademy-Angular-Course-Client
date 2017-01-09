import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ElectricalSystemsRoutingModule } from './electrical-systems-routing.module';

import { ElectricalSystemsComponent } from './electrical-systems.component';

@NgModule({
  imports: [
    ElectricalSystemsRoutingModule,
    SharedModule
  ],
  declarations: [
    ElectricalSystemsComponent,
  ]
})
export class ElectricalSystemsModule {
}
