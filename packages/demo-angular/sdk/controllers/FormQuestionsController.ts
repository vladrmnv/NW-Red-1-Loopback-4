/* tslint:disable:max-line-length */
/**
 * LoopBack Application
 * 1.0.0
 * undefined
 */

import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import * as __model from '../model';

export interface QuestionsParams {
  key: string;
  body?: __model.Question;
}

@Injectable()
export class FormQuestionsControllerService {
  constructor(private http: HttpClient) {}

  /** http://undefined/swagger/swagger-ui.html#!/FormQuestionsController/createQuestions */
  questions(params: QuestionsParams): Observable<__model.Question> {
    const pathParams = {
      key: params.key,
    };
    const bodyParams = params.body;
    const bodyParamsWithoutUndefined: any = {};
    Object.entries(bodyParams || {}).forEach(([key, value]) => {
      if (value !== undefined) bodyParamsWithoutUndefined[key] = value;
    });
    return this.http.post<__model.Question>(`/forms/${pathParams.key}/questions`, bodyParamsWithoutUndefined);
  }
}
