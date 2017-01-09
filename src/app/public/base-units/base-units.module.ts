import { NgModule } from '@angular/core';

import { BaseUnitsComponent } from './base-units.component';
import { BaseUnitListComponent } from './components/base-unit-list/base-unit-list.component';

import { BaseUnitService } from './services/base-unit.service';

import { SharedModule } from '../../shared/shared.module';

// import { BaseUnitsRoutingModule } from './base-units-routing.module';

import { baseUnitRouting } from './base-units-routing.module';

@NgModule({
  imports: [
    // BaseUnitsRoutingModule,
    baseUnitRouting,
    SharedModule
  ],
  declarations: [
    BaseUnitsComponent,
    BaseUnitListComponent
  ],
  providers: [BaseUnitService]
})
export class BaseUnitsModule {
}
