import { inject } from '@loopback/context';
import { repository } from '@loopback/repository';
import { FormRepository, QuestionRepository } from '../../../repositories';
import { post, param, requestBody, HttpErrors } from '@loopback/rest';
import { Form, Question } from '../../../models';

export class FormQuestionsController {
  constructor(
    @repository(FormRepository) public formRepository: FormRepository,
    @repository(QuestionRepository)
    public questionRepository: QuestionRepository,
  ) {}

  @post('/forms/{key}/questions', {
    responses: {
      '200': {
        description: 'Create questions for a form',
        tags: ['forms'],
        content: { 'application/json': { 'x-ts-type': Question } },
      },
    },
  })
  async createQuestions(
    @param.path.string('key') formId: typeof Form.prototype.key,
    @requestBody() questionData: Question,
  ) {
    const form = await this.formRepository.findById(formId);
    if (!form) throw new HttpErrors.NotFound('Form not found');

    questionData.formId = formId;
    return await this.questionRepository.create(questionData);
  }
}
