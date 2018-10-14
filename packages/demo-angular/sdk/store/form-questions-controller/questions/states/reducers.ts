/* tslint:disable:max-line-length */
/**
 * LoopBack Application
 * 1.0.0
 * undefined
 */

import {createFeatureSelector} from '@ngrx/store';

import * as __model from '../../../../model';
import * as actions from './actions';

export interface QuestionsState {
  data: __model.Question | null;
  loading: boolean;
  error: string | null;
}

export const initialQuestionsState: QuestionsState = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'FormQuestionsController_Questions';
export const getQuestionsStateSelector = createFeatureSelector<QuestionsState>(selectorName);

export function QuestionsReducer(
  state: QuestionsState = initialQuestionsState,
  action: actions.QuestionsAction): QuestionsState {
  switch (action.type) {
    case actions.Actions.START: return {...state, loading: true, error: null};
    case actions.Actions.SUCCESS: return {...state, data: action.payload, loading: false};
    case actions.Actions.ERROR: return {...state, error: action.payload, loading: false};
    default: return state;
  }
}
