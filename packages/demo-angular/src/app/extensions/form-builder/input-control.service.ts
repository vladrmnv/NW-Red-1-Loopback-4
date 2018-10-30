import { Injectable } from '@angular/core';
import { Form } from 'sdk/model';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class InputControlService {
  constructor() {}

  toFormGroup(form: Form) {
    const group: any = {};

    form.questions.forEach(question => {
      group[question.key] = question.required
        ? new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }
}
