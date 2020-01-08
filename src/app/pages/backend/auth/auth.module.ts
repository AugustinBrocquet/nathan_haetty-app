import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AuthRoutingModule } from './auth-routing.module';
import { NbAuthModule } from '@nebular/auth';
import {
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule,
  NbCardModule,
  NbLayoutModule,
  NbSpinnerModule,
} from '@nebular/theme';

import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { RequestPasswordComponent } from './request-password/request-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { InvalidTokenComponent } from './reset-password/invalid-token/invalid-token.component';
import { ExpiredTokenComponent } from './reset-password/expired-token/expired-token.component';
import { RegisterComponent } from './register/register.component';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    AuthRoutingModule,
    NbAuthModule,
    NbLayoutModule,
    NbCardModule,
    NbSpinnerModule,
    NgxSpinnerModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthComponent,
    RequestPasswordComponent,
    ResetPasswordComponent,
    InvalidTokenComponent,
    ExpiredTokenComponent,
  ],
})
export class AuthModule {
}
