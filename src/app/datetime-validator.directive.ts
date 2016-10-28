import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, AbstractControl } from '@angular/forms';
import * as moment from 'moment';

@Directive({
  selector: '[cmdDatetimeValidator][ngModel]',
  providers: [ { provide: NG_VALIDATORS, useExisting: forwardRef(() => DatetimeValidatorDirective), multi: true } ]
})
export class DatetimeValidatorDirective {

  constructor() { }

  validate(c: AbstractControl): { [key: string]: any } {
    console.log('VALIDATE' + c.value);
    let date = moment( c.value, 'DD/MM/YYYY HH:mm' );
    let invalid = { datetimeInvalid: { valid: false } };
    if (date.isValid()) {
      return null;
    } else {
      return invalid;
    }
  }

}
