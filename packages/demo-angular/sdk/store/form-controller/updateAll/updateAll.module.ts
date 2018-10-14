/* tslint:disable:max-line-length */
/**
 * LoopBack Application
 * 1.0.0
 * undefined
 */

import {NgModule} from '@angular/core';
import {EffectsModule as NgrxEffectsModule} from '@ngrx/effects';
import {StoreModule as NgrxStoreModule} from '@ngrx/store';

import {FormControllerService} from '../../../controllers/FormController';
import {FormsSharedModule} from '../../forms-shared.module';
import {UpdateAllFormService} from './updateAll.service';

import {UpdateAllEffects} from './states/effects';
import {UpdateAllReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, UpdateAllReducer),
    NgrxEffectsModule.forFeature([UpdateAllEffects]),
  ],
  providers: [
    FormControllerService,
    UpdateAllFormService,
  ],
})
export class UpdateAllModule {}
