import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ElectricalSystemTypesRoutingModule } from './electrical-system-types-routing.module';

import { ElectricalSystemTypesComponent } from './electrical-system-types.component';
import { ElectricalSystemTypeDetailsComponent }
  from './components/electrical-system-type-details/electrical-system-type-details.component';

import { ElectricalSystemTypeService } from './services/electrical-system-type.service';

@NgModule({
  imports: [
    ElectricalSystemTypesRoutingModule,
    SharedModule
  ],
  declarations: [
    ElectricalSystemTypeDetailsComponent,
    ElectricalSystemTypesComponent
  ],
  providers: [ElectricalSystemTypeService]
})
export class ElectricalSystemTypesModule { }
