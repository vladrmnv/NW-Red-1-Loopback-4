import { Component, Input } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { Question } from 'sdk/model';

@Component({
  selector: 'nw-question',
  templateUrl: './dynamic-form-question.component.html',
})
export class DynamicFormQuestionComponent {
  @Input()
  question: Question;
  @Input()
  form: FormGroup;
  get isValid() {
    return this.form.controls[this.question.key].valid;
  }
}
