/* tslint:disable:max-line-length max-classes-per-file */
/**
 * LoopBack Application
 * 1.0.0
 * undefined
 */

import {Action} from '@ngrx/store';
import {DeleteByIdParams} from '../../../../controllers/FormController';

export enum Actions {
  START = '[FormController deleteById] Start',
  SUCCESS = '[FormController deleteById] Success',
  ERROR = '[FormController deleteById] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor(public payload: DeleteByIdParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: void) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: string) {}
}

export type DeleteByIdAction = Start | Success | Error;
