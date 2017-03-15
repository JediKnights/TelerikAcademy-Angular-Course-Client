import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BaseUnit } from '../../models/base-unit';
import { BaseUnitService } from '../../services/base-unit.service';

import { Location } from '@angular/common';

@Component({
  selector: 'app-base-unit-create',
  template: `
    <h1>Create Unit</h1>
    <app-admin-base-unit-form (onSubmit)="onSubmit($event)" (onCancel)="onCancel($event)"></app-admin-base-unit-form>
  `,
})
export class BaseUnitCreateComponent {
  constructor(private route: ActivatedRoute, private router: Router, private baseUnitService: BaseUnitService, private location: Location) {
  }

  public onSubmit(baseUnit: BaseUnit) {

    this.baseUnitService
      .createBaseUnit(baseUnit)
      .subscribe(() => {
        this.router.navigate(['/admin/base-units']);
      }, (error) => {
        console.log(error);
      });
  }

  public onCancel() {
    this.location.back();
  }
}
