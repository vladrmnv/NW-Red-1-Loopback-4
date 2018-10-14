/* tslint:disable:max-line-length */
/**
 * LoopBack Application
 * 1.0.0
 * undefined
 */

import { createFeatureSelector } from '@ngrx/store';

import * as __model from '../../../../model';
import * as actions from './actions';

export interface CreateState {
  data: __model.INwUser | null;
  loading: boolean;
  error: string | null;
}

export const initialCreateState: CreateState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'UserController_Create';
export const getCreateStateSelector = createFeatureSelector<CreateState>(
  selectorName,
);

export function CreateReducer(
  state: CreateState = initialCreateState,
  action: actions.CreateAction,
): CreateState {
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
