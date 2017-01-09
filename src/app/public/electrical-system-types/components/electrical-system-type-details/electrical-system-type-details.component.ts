import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ElectricalSystemType } from '../../models/electrical-system-type';
import { ElectricalSystemTypeService } from '../../services/electrical-system-type.service';

@Component({
  moduleId: 'module.id',
  selector: 'app-user-detail',
  template: ``
})
export class ElectricalSystemTypeDetailsComponent implements OnInit {

  public electricalSystemType: ElectricalSystemType;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private electricalSystemTypeService: ElectricalSystemTypeService) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.electricalSystemTypeService.getElectricalSystemTypeById(+params['id']))
      .subscribe((electricalSystemType: ElectricalSystemType) => this.electricalSystemType = electricalSystemType);
  }
}