import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WallpapersListComponent } from './wallpapers-list.component';
import { FormsModule } from '@angular/forms';
import { OwlModule } from 'ngx-owl-carousel';

@NgModule({
  declarations: [WallpapersListComponent],
  imports: [
    CommonModule,
    FormsModule,
    OwlModule,
  ]
})
export class WallpapersListModule { }
