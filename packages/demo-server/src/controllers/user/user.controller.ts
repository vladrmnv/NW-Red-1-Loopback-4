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
import { NwUser } from '../../models';
import { NwUserRepository } from '../../repositories';

export class UserController {
  constructor(
    @repository(NwUserRepository) public nwUserRepository: NwUserRepository,
  ) {}

  @post('/users', {
    responses: {
      '200': {
        description: 'NwUser model instance',
        content: { 'application/json': { 'x-ts-type': NwUser } },
      },
    },
  })
  async create(@requestBody() nwUser: NwUser): Promise<NwUser> {
    return await this.nwUserRepository.create(nwUser);
  }

  @get('/users/count', {
    responses: {
      '200': {
        description: 'NwUser model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(NwUser)) where?: Where,
  ): Promise<Count> {
    return await this.nwUserRepository.count(where);
  }

  @get('/users', {
    responses: {
      '200': {
        description: 'Array of NwUser model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': NwUser } },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(NwUser)) filter?: Filter,
  ): Promise<NwUser[]> {
    return await this.nwUserRepository.find(filter);
  }

  @patch('/users', {
    responses: {
      '200': {
        description: 'NwUser PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async updateAll(
    @requestBody() nwUser: NwUser,
    @param.query.object('where', getWhereSchemaFor(NwUser)) where?: Where,
  ): Promise<Count> {
    return await this.nwUserRepository.updateAll(nwUser, where);
  }

  @get('/users/{id}', {
    responses: {
      '200': {
        description: 'NwUser model instance',
        content: { 'application/json': { 'x-ts-type': NwUser } },
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<NwUser> {
    return await this.nwUserRepository.findById(id);
  }

  @patch('/users/{id}', {
    responses: {
      '204': {
        description: 'NwUser PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() nwUser: NwUser,
  ): Promise<void> {
    await this.nwUserRepository.updateById(id, nwUser);
  }

  @del('/users/{id}', {
    responses: {
      '204': {
        description: 'NwUser DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.nwUserRepository.deleteById(id);
  }
}
