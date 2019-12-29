import { Directive, forwardRef, Input } from '@angular/core';
import {ControlValueAccessor, NG_VALIDATORS, Validator, FormGroup, ValidationErrors} from '@angular/forms';
import { validatePasswordsCreator } from './validators/validate-password';

@Directive({
  selector: '[passwordRepeat]',
  providers: [
    {provide: NG_VALIDATORS, multi: true, useExisting: forwardRef(() => PasswordRepeatDirective)}
  ]
})
export class PasswordRepeatDirective implements Validator {
  @Input('passwordRepeat')
  names : string[]

  constructor() { }

  validate(control: FormGroup): ValidationErrors | null {
    return validatePasswordsCreator(this.names[0], this.names[1])(control);
  }

}
