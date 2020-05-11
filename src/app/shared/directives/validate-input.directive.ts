import {Directive, HostBinding, Input} from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'input[validate]'
})
export class ValidateInputDirective {

  @Input('validate') control: AbstractControl;

  @HostBinding('class.is-invalid')
  get isInvalidClass() {
    if (this.control) {
      return this.control.invalid && (this.control.dirty || this.control.touched);
    }
  }

}
