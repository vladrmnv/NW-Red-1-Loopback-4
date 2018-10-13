/* tslint:disable:max-line-length */
/**
 * LoopBack Application
 * 1.0.0
 * undefined
 */

import {Injectable} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {UserControllerService} from '../../../controllers/UserController';

@Injectable()
export class CountFormService {
  form: FormGroup;
  constructor(
    private userControllerService: UserControllerService,
  ) {
    this.form = new FormGroup({
      where: new FormGroup({

      }, []),
    });
  }

  submit() {
    return this.userControllerService.count(this.form.value);
  }
}
