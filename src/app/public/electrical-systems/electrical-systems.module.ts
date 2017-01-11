import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

// import { ElectricalSystemsRoutingModule } from './electrical-systems-routing.module';
import { electricalSystemRouting } from './electrical-systems.routes';
import { ElectricalSystemsComponent } from './electrical-systems.component';

@NgModule({
  imports: [
    // ElectricalSystemsRoutingModule,
    electricalSystemRouting,
    SharedModule
  ],
  declarations: [
    ElectricalSystemsComponent,
  ]
})
export class ElectricalSystemsModule {
}
