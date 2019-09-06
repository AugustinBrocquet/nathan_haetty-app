import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NbProgressBarModule, NbCardModule, NbTreeGridModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { ThemeModule } from 'src/app/@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { VideosListComponent } from './videos-list.component';



@NgModule({
  declarations: [VideosListComponent],
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
  ]
})
export class VideosListModule { }
