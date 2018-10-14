import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Question} from '../models';
import {MemoryDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class QuestionRepository extends DefaultCrudRepository<
  Question,
  typeof Question.prototype.key
> {
  constructor(
    @inject('datasources.memory') dataSource: MemoryDataSource,
  ) {
    super(Question, dataSource);
  }
}
