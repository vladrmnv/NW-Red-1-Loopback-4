/* tslint:disable:max-line-length */
/**
 * LoopBack Application
 * 1.0.0
 * undefined
 */

import {createFeatureSelector} from '@ngrx/store';

import * as actions from './actions';

export interface DeleteByIdState {
  data: void | null;
  loading: boolean;
  error: string | null;
}

export const initialDeleteByIdState: DeleteByIdState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'FormController_DeleteById';
export const getDeleteByIdStateSelector = createFeatureSelector<DeleteByIdState>(selectorName);

export function DeleteByIdReducer(
  state: DeleteByIdState = initialDeleteByIdState,
  action: actions.DeleteByIdAction): DeleteByIdState {
  switch (action.type) {
    case actions.Actions.START: return {...state, loading: true, error: null};
    case actions.Actions.SUCCESS: return {...state, data: action.payload, loading: false};
    case actions.Actions.ERROR: return {...state, error: action.payload, loading: false};
    default: return state;
  }
}
