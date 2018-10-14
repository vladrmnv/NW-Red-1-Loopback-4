/* tslint:disable:max-line-length max-classes-per-file */
/**
 * LoopBack Application
 * 1.0.0
 * undefined
 */

import {Action} from '@ngrx/store';
import {UpdateAllParams} from '../../../../controllers/FormController';
import * as __model from '../../../../model';

export enum Actions {
  START = '[FormController updateAll] Start',
  SUCCESS = '[FormController updateAll] Success',
  ERROR = '[FormController updateAll] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor(public payload: UpdateAllParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: __model.UpdateAllGeneratedInlineModel) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: string) {}
}

export type UpdateAllAction = Start | Success | Error;
