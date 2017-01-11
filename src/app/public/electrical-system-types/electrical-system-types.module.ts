import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { electricalSystemTypesRouting } from './electrical-system-types.routes';

import { ElectricalSystemTypeDetailsComponent }
  from './components/electrical-system-type-details/electrical-system-type-details.component';

import { ElectricalSystemTypeService } from './services/electrical-system-type.service';

import { ElectricalSystemTypesComponent } from './electrical-system-types.component';

@NgModule({
  imports: [
    // ElectricalSystemTypesRoutingModule,
    electricalSystemTypesRouting,
    SharedModule
  ],
  declarations: [
    ElectricalSystemTypeDetailsComponent,
    ElectricalSystemTypesComponent],
  providers: [ElectricalSystemTypeService]
})
export class ElectricalSystemTypesModule { }
