import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { InputControlService } from '../input-control.service';
import { Form } from 'sdk/model';

@Component({
  selector: 'nw-dynamic-form',
  templateUrl: './dynamic-form.component.html',
})
export class DynamicFormComponent implements OnInit {
  @Input()
  formData: Form;
  form: FormGroup;
  payLoad = '';

  constructor(private ics: InputControlService) {}

  ngOnInit() {
    this.form = this.ics.toFormGroup(this.formData);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}
