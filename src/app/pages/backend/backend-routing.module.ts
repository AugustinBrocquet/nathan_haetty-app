import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { BackendComponent } from './backend.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { ViewUserComponent } from './users/view-user/view-user.component';
import { AuthAdminGuard } from 'src/app/shared/guards/auth/auth-admin.guard';


const routes: Routes = [{
  path: '',
  component: BackendComponent,
  canActivate: [AuthAdminGuard],
  canActivateChild: [AuthAdminGuard],
  children: [
    {
      path: 'users',
      component: UsersListComponent,
    },
    {
      path: 'user/:userId',
      component: ViewUserComponent,
    },
    {
      path: '',
      redirectTo: 'users',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackendRoutingModule {
}
