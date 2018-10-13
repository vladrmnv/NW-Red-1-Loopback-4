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
export class UpdateAllFormService {
  form: FormGroup;
  constructor(
    private userControllerService: UserControllerService,
  ) {
    this.form = new FormGroup({
      where: new FormGroup({

      }, []),
      body: new FormControl(undefined, []),
    });
  }

  submit() {
    return this.userControllerService.updateAll(this.form.value);
  }
}
