import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../auth.service';
import {Router} from '@angular/router';
import {REGEXP} from '../../../../shared/utilities/Constants';

@Component({
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {

  form: FormGroup;
  errorMessage = '';
  successMessage = '';
  showLoadingState = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = fb.group({
      email: [null, [Validators.required, Validators.pattern(REGEXP.email)]],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  /**
   * Executed When Form Is Submitted
   */
  onSubmit() {
    // Stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.showLoadingState = true;

    const email: string = this.f.email.value;
    this.authService.sendPasswordResetEmail(email)
      .then(() => {
        this.showLoadingState = false;
        this.successMessage = 'Revise su correo electrónico para restablecer su contraseña.';
        this.errorMessage = '';
        setTimeout(() => {
          this.router.navigateByUrl('/auth/login');
        }, 5000);
      })
      .catch(err => {
        console.log(err);
        this.showLoadingState = false;
      });
  }

}
