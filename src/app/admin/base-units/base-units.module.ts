import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
// import { BaseUnitsRoutingModule } from './base-units-routing.module';
import { baseUnitRouting } from './base-units.routes';

import { BaseUnitsComponent } from './base-units.component';
import { BaseUnitListComponent } from './components/base-unit-list/base-unit-list.component';
import { BaseUnitCreateComponent } from './components/base-unit-create/base-unit-create.component';
import { BaseUnitEditComponent } from './components/base-unit-edit/base-unit-edit.component';
import { BaseUnitFormComponent } from './components/base-unit-form/base-unit-form.component';

import { BaseUnitService } from './services/base-unit.service';

@NgModule({
  imports: [
    // BaseUnitsRoutingModule,
    baseUnitRouting,
    SharedModule
  ],
  declarations: [
    BaseUnitsComponent,
    BaseUnitListComponent,
    BaseUnitCreateComponent,
    BaseUnitEditComponent,
    BaseUnitFormComponent
    ],
    providers: [BaseUnitService]
})
export class BaseUnitsModule {
}
