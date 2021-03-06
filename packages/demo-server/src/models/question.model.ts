import { Entity, model, property } from '@loopback/repository';

enum QUESTION_CONTROL_TYPES {
  textbox = 'textbox',
}

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
  controlType: QUESTION_CONTROL_TYPES;

  @property({
    type: 'string',
  })
  formId?: string;

  @property({
    type: 'boolean',
  })
  required: boolean;

  constructor(data?: Partial<Question>) {
    super(data);
  }
}
