import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-battery-charge-level',
  template: `<p>
  Battery charge level component. Current charge is: {{batteryChargeLevel}}!
  </p>`
})
export class BatteryChargeLevelComponent {
  @Input()
  batteryChargeLevel: number;
}
