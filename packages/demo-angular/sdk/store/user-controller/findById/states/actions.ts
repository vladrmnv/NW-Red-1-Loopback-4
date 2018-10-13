/* tslint:disable:max-line-length max-classes-per-file */
/**
 * LoopBack Application
 * 1.0.0
 * undefined
 */

import {Action} from '@ngrx/store';
import {FindByIdParams} from '../../../../controllers/UserController';
import * as __model from '../../../../model';

export enum Actions {
  START = '[UserController findById] Start',
  SUCCESS = '[UserController findById] Success',
  ERROR = '[UserController findById] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor(public payload: FindByIdParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: __model.NwUser) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: string) {}
}

export type FindByIdAction = Start | Success | Error;
