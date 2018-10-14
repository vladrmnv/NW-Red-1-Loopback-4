/* tslint:disable:max-line-length */
/**
 * LoopBack Application
 * 1.0.0
 * undefined
 */

import { createFeatureSelector } from '@ngrx/store';

import * as __model from '../../../../model';
import * as actions from './actions';

export interface FindState {
  data: __model.INwUser[] | null;
  loading: boolean;
  error: string | null;
}

export const initialFindState: FindState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'UserController_Find';
export const getFindStateSelector = createFeatureSelector<FindState>(
  selectorName,
);

export function FindReducer(
  state: FindState = initialFindState,
  action: actions.FindAction,
): FindState {
  switch (action.type) {
    case actions.Actions.START:
      return { ...state, loading: true, error: null };
    case actions.Actions.SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case actions.Actions.ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}
