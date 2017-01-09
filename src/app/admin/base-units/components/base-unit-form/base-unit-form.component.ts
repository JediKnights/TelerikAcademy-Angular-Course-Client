import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { BaseUnit } from '../../models/base-unit';

@Component({
  selector: 'app-admin-base-unit-form',
  templateUrl: './base-unit-form.component.html'
})
export class BaseUnitFormComponent implements OnInit {
  public baseUnitForm: FormGroup;

  @Input() public baseUnit?: BaseUnit;
  @Output() public onSubmit = new EventEmitter();

  public constructor(private formBuilder: FormBuilder) {
  }

  public ngOnInit(): void {
    this.baseUnitForm = this.formBuilder.group({
      name: [
        this.baseUnit ? this.baseUnit.name : '',
        Validators.compose([
          Validators.required,
        ]),
      ]
    });

    if (this.baseUnit) {
      this.baseUnitForm.addControl('id', new FormControl(this.baseUnit.id));
    }
  }

  public onFormSubmit() {
    if (this.baseUnitForm.valid) {
      let data = this.baseUnitForm.value;

      this.onSubmit.emit(data);
    }
  }
}
