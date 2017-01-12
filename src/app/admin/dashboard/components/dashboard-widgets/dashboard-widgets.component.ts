import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-widgets',
  template: `<p>
    Dashboard Widgets container!
    <app-battery-charge-level [batteryChargeLevel]="batteryLevel"></app-battery-charge-level>
  </p>`
})
export class DashboardWidgetsComponent implements OnInit {
  batteryLevel: number;

  ngOnInit() {
    this.batteryLevel = 20;
  }
}
