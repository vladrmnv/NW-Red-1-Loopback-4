/* tslint:disable:max-line-length max-classes-per-file */
/**
 * LoopBack Application
 * 1.0.0
 * undefined
 */

import {Action} from '@ngrx/store';
import {QuestionsParams} from '../../../../controllers/FormQuestionsController';
import * as __model from '../../../../model';

export enum Actions {
  START = '[FormQuestionsController questions] Start',
  SUCCESS = '[FormQuestionsController questions] Success',
  ERROR = '[FormQuestionsController questions] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor(public payload: QuestionsParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: __model.Question) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: string) {}
}

export type QuestionsAction = Start | Success | Error;
