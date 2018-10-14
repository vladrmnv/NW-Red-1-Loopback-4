/* tslint:disable:max-line-length */
/**
 * LoopBack Application
 * 1.0.0
 * undefined
 */

import {NgModule} from '@angular/core';
import {EffectsModule as NgrxEffectsModule} from '@ngrx/effects';
import {StoreModule as NgrxStoreModule} from '@ngrx/store';

import {FormQuestionsControllerService} from '../../../controllers/FormQuestionsController';
import {FormsSharedModule} from '../../forms-shared.module';
import {QuestionsFormService} from './questions.service';

import {QuestionsEffects} from './states/effects';
import {QuestionsReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, QuestionsReducer),
    NgrxEffectsModule.forFeature([QuestionsEffects]),
  ],
  providers: [
    FormQuestionsControllerService,
    QuestionsFormService,
  ],
})
export class QuestionsModule {}
