import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { ElectricalSystemTypesRoutingModule } from './electrical-system-types-routing.module';

import { ElectricalSystemTypeDetailsComponent }
  from './components/electrical-system-type-details/electrical-system-type-details.component';

import { ElectricalSystemTypeService } from './services/electrical-system-type.service';

import { ElectricalSystemTypesComponent } from './electrical-system-types.component';

@NgModule({
  imports: [
    ElectricalSystemTypesRoutingModule,
    SharedModule
  ],
  declarations: [
    ElectricalSystemTypeDetailsComponent,
    ElectricalSystemTypesComponent],
  providers: [ElectricalSystemTypeService]
})
export class ElectricalSystemTypesModule { }
