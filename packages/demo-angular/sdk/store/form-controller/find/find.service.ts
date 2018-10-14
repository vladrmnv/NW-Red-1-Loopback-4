/* tslint:disable:max-line-length */
/**
 * LoopBack Application
 * 1.0.0
 * undefined
 */

import {Injectable} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormControllerService} from '../../../controllers/FormController';

@Injectable()
export class FindFormService {
  form: FormGroup;
  constructor(
    private formControllerService: FormControllerService,
  ) {
    this.form = new FormGroup({
      filter: new FormGroup({

      }, []),
    });
  }

  submit() {
    return this.formControllerService.find(this.form.value);
  }
}
