import { Component, OnInit } from '@angular/core';
import { FormControllerService } from 'sdk/controllers/FormController';
import { Form } from 'sdk/model';
import { Observable } from 'rxjs';

@Component({
  selector: 'nw-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  form$: Observable<Form>;
  constructor(private formService: FormControllerService) {}

  ngOnInit() {
    this.getForm();
  }

  getForm() {
    this.form$ = this.formService.findById({ id: 'createUser' });
  }
}
