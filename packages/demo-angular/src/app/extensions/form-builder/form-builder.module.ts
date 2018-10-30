import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputControlService } from './input-control.service';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [DynamicFormComponent, DynamicFormQuestionComponent],
  providers: [InputControlService],
  exports: [InputControlService, DynamicFormComponent],
})
export class FormBuilderModule {}
