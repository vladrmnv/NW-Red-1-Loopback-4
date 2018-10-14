import { Entity, model, property, belongsTo } from '@loopback/repository';
import { Form } from './form.model';

@model()
export class Question extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  key: string;

  @property({
    type: 'string',
    required: true,
  })
  label: string;

  @property({
    type: 'string',
  })
  value?: string;

  @property({
    type: 'string',
  })
  formId?: string;

  constructor(data?: Partial<Question>) {
    super(data);
  }
}
