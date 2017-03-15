import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { BaseUnit } from '../../models/base-unit';
import { BaseUnitService } from '../../services/base-unit.service';

import { Location } from '@angular/common';

@Component({
  selector: 'app-admin-base-unit-edit',
  template: `
    <h1>Edit Base Unit</h1>
    <app-admin-base-unit-form *ngIf="baseUnit" [baseUnit]="baseUnit" (onCancel)="onCancel($event)" 
    (onSubmit)="onSubmit($event)"></app-admin-base-unit-form>
  `,
  styleUrls: ['./base-unit-edit.component.css']
})
export class BaseUnitEditComponent implements OnInit {
  public baseUnit: BaseUnit;

  constructor(private route: ActivatedRoute, private router: Router, private baseUnitService: BaseUnitService, private location: Location) {
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.baseUnitService.getById(+params['id']))
      .subscribe((baseUnit: BaseUnit) => {
        this.baseUnit = baseUnit;
      });
  }

  public onSubmit(baseUnit: BaseUnit) {
    this.baseUnitService
      .updateBaseUnit(baseUnit)
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
