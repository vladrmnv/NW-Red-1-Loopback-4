/* tslint:disable:max-line-length */
/**
 * LoopBack Application
 * 1.0.0
 * undefined
 */

import {createFeatureSelector} from '@ngrx/store';

import * as actions from './actions';

export interface UpdateByIdState {
  data: void | null;
  loading: boolean;
  error: string | null;
}

export const initialUpdateByIdState: UpdateByIdState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'FormController_UpdateById';
export const getUpdateByIdStateSelector = createFeatureSelector<UpdateByIdState>(selectorName);

export function UpdateByIdReducer(
  state: UpdateByIdState = initialUpdateByIdState,
  action: actions.UpdateByIdAction): UpdateByIdState {
  switch (action.type) {
    case actions.Actions.START: return {...state, loading: true, error: null};
    case actions.Actions.SUCCESS: return {...state, data: action.payload, loading: false};
    case actions.Actions.ERROR: return {...state, error: action.payload, loading: false};
    default: return state;
  }
}
