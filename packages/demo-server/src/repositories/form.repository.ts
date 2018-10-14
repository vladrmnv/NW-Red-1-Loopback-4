import {
  DefaultCrudRepository,
  juggler,
  HasManyRepositoryFactory,
  repository,
} from '@loopback/repository';
import { Form, Question } from '../models';
import { MemoryDataSource } from '../datasources';
import { inject, Getter } from '@loopback/core';
import { QuestionRepository } from './question.repository';

export class FormRepository extends DefaultCrudRepository<
  Form,
  typeof Form.prototype.key
> {
  public readonly questions: HasManyRepositoryFactory<
    Question,
    typeof Form.prototype.key
  >;
  constructor(
    @inject('datasources.memory') dataSource: MemoryDataSource,
    @repository.getter(QuestionRepository)
    getQuestionRepository: Getter<QuestionRepository>,
  ) {
    super(Form, dataSource);
    this.questions = this._createHasManyRepositoryFactoryFor(
      'questions',
      getQuestionRepository,
    );
  }
}
