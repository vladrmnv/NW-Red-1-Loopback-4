/* tslint:disable:max-line-length */
/**
 * LoopBack Application
 * 1.0.0
 * undefined
 */

import {AbstractControl, FormArray} from '@angular/forms';

type ControlFactory = () => AbstractControl;

/** Extends FormArray so it contains definitions of items for further creation */
export class FormArrayExtended extends FormArray {
  constructor(public createControl: ControlFactory, ...rest: any[]) {
    super([], ...rest);
  }

  setValue(value: any[], options: {onlySelf?: boolean, emitEvent?: boolean} = {}): void {
    while (value.length < this.controls.length) this.removeAt(this.length - 1);
    while (value.length > this.controls.length) this.push(this.createControl());
    super.setValue(value, options);
  }
}
