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
export class DeleteByIdFormService {
  form: FormGroup;
  constructor(
    private formControllerService: FormControllerService,
  ) {
    this.form = new FormGroup({
      id: new FormControl(undefined, [Validators.required]),
    });
  }

  submit() {
    return this.formControllerService.deleteById(this.form.value);
  }
}
