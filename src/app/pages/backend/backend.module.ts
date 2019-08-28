import { NgModule } from '@angular/core';
import { NbMenuModule, NbCardModule, NbTreeGridModule, NbIconModule, NbInputModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { BackendComponent } from './backend.component';
import { BackendRoutingModule } from './backend-routing.module';
import { UsersListModule } from './users/users-list/users-list.module';
import { ViewUserModule } from './users/view-user/view-user.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    BackendRoutingModule,
    ThemeModule,
    NbMenuModule,
    UsersListModule,
    ViewUserModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    BackendComponent,
  ],
})
export class BackendModule {
}
