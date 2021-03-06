/* tslint:disable:max-line-length max-classes-per-file */
/**
 * LoopBack Application
 * 1.0.0
 * undefined
 */

import {Action} from '@ngrx/store';
import {CreateParams} from '../../../../controllers/UserController';
import * as __model from '../../../../model';

export enum Actions {
  START = '[UserController create] Start',
  SUCCESS = '[UserController create] Success',
  ERROR = '[UserController create] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor(public payload: CreateParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: __model.NwUser) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: string) {}
}

export type CreateAction = Start | Success | Error;
