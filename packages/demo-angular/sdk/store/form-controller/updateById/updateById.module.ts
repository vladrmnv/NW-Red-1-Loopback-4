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
import {UpdateByIdFormService} from './updateById.service';

import {UpdateByIdEffects} from './states/effects';
import {UpdateByIdReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, UpdateByIdReducer),
    NgrxEffectsModule.forFeature([UpdateByIdEffects]),
  ],
  providers: [
    FormControllerService,
    UpdateByIdFormService,
  ],
})
export class UpdateByIdModule {}
