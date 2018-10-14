/* tslint:disable:max-line-length */
/**
 * LoopBack Application
 * 1.0.0
 * undefined
 */

import {createFeatureSelector} from '@ngrx/store';

import * as __model from '../../../../model';
import * as actions from './actions';

export interface FindByIdState {
  data: __model.NwUser | null;
  loading: boolean;
  error: string | null;
}

export const initialFindByIdState: FindByIdState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'UserController_FindById';
export const getFindByIdStateSelector = createFeatureSelector<FindByIdState>(selectorName);

export function FindByIdReducer(
  state: FindByIdState = initialFindByIdState,
  action: actions.FindByIdAction): FindByIdState {
  switch (action.type) {
    case actions.Actions.START: return {...state, loading: true, error: null};
    case actions.Actions.SUCCESS: return {...state, data: action.payload, loading: false};
    case actions.Actions.ERROR: return {...state, error: action.payload, loading: false};
    default: return state;
  }
}
