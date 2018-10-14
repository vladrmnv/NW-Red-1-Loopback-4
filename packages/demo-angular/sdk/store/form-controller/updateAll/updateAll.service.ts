/* tslint:disable:max-line-length */
/**
 * LoopBack Application
 * 1.0.0
 * undefined
 */

import {Injectable} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {FormControllerService} from '../../../controllers/FormController';

@Injectable()
export class UpdateAllFormService {
  form: FormGroup;
  constructor(
    private formControllerService: FormControllerService,
  ) {
    this.form = new FormGroup({
      where: new FormGroup({

      }, []),
      body: new FormControl(undefined, []),
    });
  }

  submit() {
    return this.formControllerService.updateAll(this.form.value);
  }
}
