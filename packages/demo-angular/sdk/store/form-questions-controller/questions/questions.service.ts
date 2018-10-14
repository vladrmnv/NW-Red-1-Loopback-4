/* tslint:disable:max-line-length */
/**
 * LoopBack Application
 * 1.0.0
 * undefined
 */

import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FormQuestionsControllerService} from '../../../controllers/FormQuestionsController';

@Injectable()
export class QuestionsFormService {
  form: FormGroup;
  constructor(
    private formQuestionsControllerService: FormQuestionsControllerService,
  ) {
    this.form = new FormGroup({
      key: new FormControl(undefined, [Validators.required]),
      body: new FormControl(undefined, []),
    });
  }

  submit() {
    return this.formQuestionsControllerService.questions(this.form.value);
  }
}
