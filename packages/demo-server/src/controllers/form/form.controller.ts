import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  del,
  requestBody,
} from '@loopback/rest';
import { Form } from '../../models';
import { FormRepository } from '../../repositories';

export class FormController {
  constructor(
    @repository(FormRepository) public formRepository: FormRepository,
  ) {}

  @post('/forms', {
    responses: {
      '200': {
        description: 'Form model instance',
        content: { 'application/json': { 'x-ts-type': Form } },
      },
    },
  })
  async create(@requestBody() form: Form): Promise<Form> {
    return await this.formRepository.create(form);
  }

  @get('/forms/count', {
    responses: {
      '200': {
        description: 'Form model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Form)) where?: Where,
  ): Promise<Count> {
    return await this.formRepository.count(where);
  }

  @get('/forms', {
    responses: {
      '200': {
        description: 'Array of Form model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Form } },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Form)) filter?: Filter,
  ): Promise<Form[]> {
    return await this.formRepository.find(filter);
  }

  @patch('/forms', {
    responses: {
      '200': {
        description: 'Form PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async updateAll(
    @requestBody() form: Form,
    @param.query.object('where', getWhereSchemaFor(Form)) where?: Where,
  ): Promise<Count> {
    return await this.formRepository.updateAll(form, where);
  }

  @get('/forms/{id}', {
    responses: {
      '200': {
        description: 'Form model instance',
        content: { 'application/json': { 'x-ts-type': Form } },
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Form> {
    return await this.formRepository.findById(id);
  }

  @patch('/forms/{id}', {
    responses: {
      '204': {
        description: 'Form PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() form: Form,
  ): Promise<void> {
    await this.formRepository.updateById(id, form);
  }

  @del('/forms/{id}', {
    responses: {
      '204': {
        description: 'Form DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.formRepository.deleteById(id);
  }
}
