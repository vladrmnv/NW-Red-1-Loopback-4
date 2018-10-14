/* tslint:disable:max-line-length */
/**
 * LoopBack Application
 * 1.0.0
 * undefined
 */

import {createFeatureSelector} from '@ngrx/store';

import * as __model from '../../../../model';
import * as actions from './actions';

export interface UpdateAllState {
  data: __model.UpdateAllGeneratedInlineModel | null;
  loading: boolean;
  error: string | null;
}

export const initialUpdateAllState: UpdateAllState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'FormController_UpdateAll';
export const getUpdateAllStateSelector = createFeatureSelector<UpdateAllState>(selectorName);

export function UpdateAllReducer(
  state: UpdateAllState = initialUpdateAllState,
  action: actions.UpdateAllAction): UpdateAllState {
  switch (action.type) {
    case actions.Actions.START: return {...state, loading: true, error: null};
    case actions.Actions.SUCCESS: return {...state, data: action.payload, loading: false};
    case actions.Actions.ERROR: return {...state, error: action.payload, loading: false};
    default: return state;
  }
}
