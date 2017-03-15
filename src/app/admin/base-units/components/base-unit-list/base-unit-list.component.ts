import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { BaseUnitService } from '../../services/base-unit.service';
import { BaseUnit } from '../../models/base-unit';

@Component({
  templateUrl: './base-unit-list.component.html',
  styleUrls: ['./base-unit-list.component.css', '../../styles/base-units.styles.css']
})
export class BaseUnitListComponent implements OnInit {
  public baseUnits: Observable<BaseUnit[]>;

  constructor(private baseUnitService: BaseUnitService, private router: Router) {
  }

  ngOnInit() {
    this.baseUnits = this.baseUnitService.getBaseUnits();
  }
}
