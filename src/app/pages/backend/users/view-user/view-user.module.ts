import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewUserComponent } from './view-user.component';
import { ThemeModule } from 'src/app/@theme/theme.module';
import { NbInputModule, NbCardModule, NbCheckboxModule, NbSelectModule, NbRadioModule } from '@nebular/theme';



@NgModule({
  declarations: [ViewUserComponent],
  imports: [
    CommonModule,
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbCheckboxModule,
    NbRadioModule,
    NbSelectModule,
  ]
})
export class ViewUserModule { }
