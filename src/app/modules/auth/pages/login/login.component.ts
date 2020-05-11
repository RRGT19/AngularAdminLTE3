import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../auth.service';
import {REGEXP} from '../../../../shared/utilities/Constants';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: FormGroup;
  errorMessage = '';
  showLoadingState = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    public router: Router
  ) {
    this.form = fb.group({
      email: [null, [Validators.required, Validators.pattern(REGEXP.email)]],
      password: [null, [Validators.required, Validators.minLength(6)]]
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
    const password: string = this.f.password.value;
    this.authService.login(email, password)
      .then(() => {
        this.router.navigateByUrl('/dashboard');
      })
      .catch(err => {
        console.log(err);
        this.showLoadingState = false;
      });
  }

}
