/* tslint:disable:max-line-length */
/**
 * LoopBack Application
 * 1.0.0
 * undefined
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';

import {of} from 'rxjs/observable/of';

import {catchError, map, switchMap} from 'rxjs/operators';
import {FormQuestionsControllerService} from '../../../../controllers/FormQuestionsController';
import * as actions from './actions';

@Injectable()
export class QuestionsEffects {
  @Effect()
  Questions = this.storeActions.ofType<actions.Start>(actions.Actions.START).pipe(
    switchMap((action: actions.Start) => this.formquestionscontrollerService.questions(action.payload)
      .pipe(
        map(result => new actions.Success(result)),
        catchError((error: HttpErrorResponse) => of(new actions.Error(error.message))),
      ),
    ),
  );

  constructor(
    private storeActions: Actions,
    private formquestionscontrollerService: FormQuestionsControllerService,
  ) {}
}
