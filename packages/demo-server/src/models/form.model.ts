import { Entity, model, property, hasMany } from '@loopback/repository';
import { Question } from './question.model';

@model()
export class Form extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  key: string;

  @property({
    type: 'string',
  })
  label?: string;

  @hasMany(() => Question, {
    keyTo: 'formId',
  })
  questions?: Question[];

  constructor(data?: Partial<Form>) {
    super(data);
  }
}
