/* tslint:disable:max-line-length */
/**
 * LoopBack Application
 * 1.0.0
 * undefined
 */

import {NgModule} from '@angular/core';
import {EffectsModule as NgrxEffectsModule} from '@ngrx/effects';
import {StoreModule as NgrxStoreModule} from '@ngrx/store';

import {UserControllerService} from '../../../controllers/UserController';
import {FormsSharedModule} from '../../forms-shared.module';
import {FindFormService} from './find.service';

import {FindEffects} from './states/effects';
import {FindReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, FindReducer),
    NgrxEffectsModule.forFeature([FindEffects]),
  ],
  providers: [
    UserControllerService,
    FindFormService,
  ],
})
export class FindModule {}
