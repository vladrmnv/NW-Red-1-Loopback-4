/* tslint:disable:max-line-length */
/**
 * LoopBack Application
 * 1.0.0
 * undefined
 */

import {Injectable} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UserControllerService} from '../../../controllers/UserController';

@Injectable()
export class CreateFormService {
  form: FormGroup;
  constructor(
    private userControllerService: UserControllerService,
  ) {
    this.form = new FormGroup({
      body: new FormControl(undefined, []),
    });
  }

  submit() {
    return this.userControllerService.create(this.form.value);
  }
}
