/* tslint:disable:max-line-length max-classes-per-file */
/**
 * LoopBack Application
 * 1.0.0
 * undefined
 */

import {Action} from '@ngrx/store';
import {CountParams} from '../../../../controllers/FormController';
import * as __model from '../../../../model';

export enum Actions {
  START = '[FormController count] Start',
  SUCCESS = '[FormController count] Success',
  ERROR = '[FormController count] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor(public payload: CountParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: __model.CountGeneratedInlineModel) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: string) {}
}

export type CountAction = Start | Success | Error;
