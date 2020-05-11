import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl} from '@angular/forms';
import {FORM_VALIDATION_MESSAGES} from '../../utilities/Constants';

/**
 * Error container, which sole responsibility is to show error messages.
 */

@Component({
  selector: 'app-error-message-container',
  templateUrl: './error-message-container.component.html',
  styleUrls: ['./error-message-container.component.scss'],
  // tslint:disable-next-line:no-host-metadata-property
  host: {class: 'invalid-feedback'}
})
export class ErrorMessageContainerComponent implements OnInit {

  @Input() control: AbstractControl;
  @Input() errorMessagesKeyName: string;
  errorMessages: { type: string, message: string }[];

  ngOnInit() {
    this.errorMessages = FORM_VALIDATION_MESSAGES[this.errorMessagesKeyName];
  }

}
