import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
import { AuthAdminGuard } from './shared/guards/auth/auth-admin.guard';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./pages/backend/backend.module')
      .then(m => m.BackendModule),
  },
  {
    path: 'front',
    loadChildren: () => import('./pages/frontend/frontend.module')
      .then(m => m.FrontendModule),
  },
  {
    path: 'admin/auth', loadChildren: () => import('./pages/backend/auth/auth.module')
      .then(m => m.AuthModule)
  },
  { path: '', redirectTo: 'front', pathMatch: 'full' },
  { path: '**', redirectTo: 'front' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
