import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsListComponent } from './posts-list.component';
import { NbProgressBarModule } from '@nebular/theme';
import { NbCardModule, NbTreeGridModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { ThemeModule } from 'src/app/@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [PostsListComponent],
  imports: [
    CommonModule,
    FormsModule,
    NbProgressBarModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    Ng2SmartTableModule,
    NgxSpinnerModule,

  ],
  exports: []
})
export class PostsListModule { }
