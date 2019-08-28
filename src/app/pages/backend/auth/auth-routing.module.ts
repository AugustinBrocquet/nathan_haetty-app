import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { RequestPasswordComponent } from './request-password/request-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { InvalidTokenComponent } from './reset-password/invalid-token/invalid-token.component';
import { ExpiredTokenComponent } from './reset-password/expired-token/expired-token.component';
import { RegisterComponent } from './register/register.component';


export const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'request-password',
        component: RequestPasswordComponent,
      },
      {
        path: 'reset-password/:token',
        component: ResetPasswordComponent,
      },
      {
        path: 'invalid-token',
        component: InvalidTokenComponent,
      },
      {
        path: 'expired-token',
        component: ExpiredTokenComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
}