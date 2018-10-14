/* tslint:disable:max-line-length max-classes-per-file */
/**
 * LoopBack Application
 * 1.0.0
 * undefined
 */

import {Action} from '@ngrx/store';
import {UpdateByIdParams} from '../../../../controllers/FormController';

export enum Actions {
  START = '[FormController updateById] Start',
  SUCCESS = '[FormController updateById] Success',
  ERROR = '[FormController updateById] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor(public payload: UpdateByIdParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: void) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: string) {}
}

export type UpdateByIdAction = Start | Success | Error;
