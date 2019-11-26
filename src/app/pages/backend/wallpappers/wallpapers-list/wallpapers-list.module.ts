import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WallpapersListComponent } from './wallpapers-list.component';
import { FormsModule } from '@angular/forms';
import { OwlModule } from 'ngx-owl-carousel';
import { NbProgressBarModule, NbCardModule, NbTreeGridModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { ThemeModule } from 'src/app/@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [WallpapersListComponent],
  imports: [
    CommonModule,
    FormsModule,
    OwlModule,
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
export class WallpapersListModule { }
