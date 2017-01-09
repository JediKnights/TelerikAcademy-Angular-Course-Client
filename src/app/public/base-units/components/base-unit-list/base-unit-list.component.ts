import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { BaseUnitService } from '../../services/base-unit.service';
import { BaseUnit } from '../../models/base-unit';

@Component({
  selector: 'app-public-base-unit-list',
  templateUrl: './base-unit-list.component.html'
})
export class BaseUnitListComponent implements OnInit {
  public units: Observable<BaseUnit[]>;

  constructor(private baseUnitService: BaseUnitService, private router: Router) {
  }

  ngOnInit() {
    this.units = this.baseUnitService.getBaseUnits();
  }
}
