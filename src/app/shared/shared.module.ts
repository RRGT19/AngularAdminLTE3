import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {ErrorMessageContainerComponent} from './components/error-message-container/error-message-container.component';
import {ValidateInputDirective} from './directives/validate-input.directive';

@NgModule({
  declarations: [
    ErrorMessageContainerComponent,
    ValidateInputDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    ErrorMessageContainerComponent,
    ValidateInputDirective,
  ]
})
export class SharedModule {
}
