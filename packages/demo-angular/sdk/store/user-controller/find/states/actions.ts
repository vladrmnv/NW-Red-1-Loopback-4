/* tslint:disable:max-line-length max-classes-per-file */
/**
 * LoopBack Application
 * 1.0.0
 * undefined
 */

import { Action } from '@ngrx/store';
import { FindParams } from '../../../../controllers/UserController';
import * as __model from '../../../../model';

export enum Actions {
  START = '[UserController find] Start',
  SUCCESS = '[UserController find] Success',
  ERROR = '[UserController find] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor(public payload: FindParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: __model.INwUser[]) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: string) {}
}

export type FindAction = Start | Success | Error;
