/* tslint:disable:max-line-length */
/**
 * LoopBack Application
 * 1.0.0
 * undefined
 */

import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FormControllerService} from '../../../controllers/FormController';

@Injectable()
export class UpdateByIdFormService {
  form: FormGroup;
  constructor(
    private formControllerService: FormControllerService,
  ) {
    this.form = new FormGroup({
      id: new FormControl(undefined, [Validators.required]),
      body: new FormControl(undefined, []),
    });
  }

  submit() {
    return this.formControllerService.updateById(this.form.value);
  }
}
