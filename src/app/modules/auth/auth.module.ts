import {NgModule} from '@angular/core';
import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './pages/login/login.component';
import {AuthService} from './auth.service';
import {SharedModule} from '../../shared/shared.module';
import {ForgotPasswordComponent} from './pages/forgot-password/forgot-password.component';
import {AuthGuard} from "./guards/auth.guard";

@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent
  ],
  imports: [
    SharedModule,
    AuthRoutingModule,
  ],
  providers: [
    AuthService,
    AuthGuard
  ]
})
export class AuthModule {
}
