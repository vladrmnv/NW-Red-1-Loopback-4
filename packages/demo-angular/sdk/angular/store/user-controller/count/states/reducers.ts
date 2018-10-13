/* tslint:disable:max-line-length */
/**
 * LoopBack Application
 * 1.0.0
 * undefined
 */

import {createFeatureSelector} from '@ngrx/store';

import * as __model from '../../../../model';
import * as actions from './actions';

export interface CountState {
  data: __model.CountGeneratedInlineModel | null;
  loading: boolean;
  error: string | null;
}

export const initialCountState: CountState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'UserController_Count';
export const getCountStateSelector = createFeatureSelector<CountState>(selectorName);

export function CountReducer(
  state: CountState = initialCountState,
  action: actions.CountAction): CountState {
  switch (action.type) {
    case actions.Actions.START: return {...state, loading: true, error: null};
    case actions.Actions.SUCCESS: return {...state, data: action.payload, loading: false};
    case actions.Actions.ERROR: return {...state, error: action.payload, loading: false};
    default: return state;
  }
}
