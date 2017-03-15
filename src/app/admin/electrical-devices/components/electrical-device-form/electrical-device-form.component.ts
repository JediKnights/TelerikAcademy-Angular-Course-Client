import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { ElectricalDevice } from '../../models/electrical-device';

@Component({
  selector: 'app-admin-electrical-device-form',
  templateUrl: './electrical-device-form.component.html'
})
export class ElectricalDeviceFormComponent implements OnInit {
  public electricalDeviceForm: FormGroup;

  @Input() public electricalDevice?: ElectricalDevice;
  @Output() public onSubmit = new EventEmitter();

  public constructor(private formBuilder: FormBuilder) {
  }

  public ngOnInit(): void {
    this.electricalDeviceForm = this.formBuilder.group({
      serialNumber: [
        this.electricalDevice ? this.electricalDevice.serialNumber : '',
        Validators.compose([
          Validators.required,
        ]),
      ]
    });

    if (this.electricalDevice) {
      this.electricalDeviceForm.addControl('id', new FormControl(this.electricalDevice.id));
    }
  }

  public onFormSubmit() {
    if (this.electricalDeviceForm.valid) {
      let data = this.electricalDeviceForm.value;
      this.onSubmit.emit(data);
    }
  }
}
