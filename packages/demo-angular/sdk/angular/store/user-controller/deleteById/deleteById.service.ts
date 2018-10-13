/* tslint:disable:max-line-length */
/**
 * LoopBack Application
 * 1.0.0
 * undefined
 */

import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserControllerService} from '../../../controllers/UserController';

@Injectable()
export class DeleteByIdFormService {
  form: FormGroup;
  constructor(
    private userControllerService: UserControllerService,
  ) {
    this.form = new FormGroup({
      id: new FormControl(undefined, [Validators.required]),
    });
  }

  submit() {
    return this.userControllerService.deleteById(this.form.value);
  }
}
