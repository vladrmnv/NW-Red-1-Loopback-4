import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {NwUser} from '../models';
import {MemoryDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class NwUserRepository extends DefaultCrudRepository<
  NwUser,
  typeof NwUser.prototype.id
> {
  constructor(
    @inject('datasources.memory') dataSource: MemoryDataSource,
  ) {
    super(NwUser, dataSource);
  }
}
