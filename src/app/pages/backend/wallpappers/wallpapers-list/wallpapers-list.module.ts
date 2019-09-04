import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WallpapersListComponent } from './wallpapers-list.component';
import { OwlModule } from 'ngx-owl-carousel';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [WallpapersListComponent],
  imports: [
    CommonModule,
    OwlModule,
    FormsModule
  ]
})
export class WallpapersListModule { }
