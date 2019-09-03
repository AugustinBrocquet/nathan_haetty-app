import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WallpapersListComponent } from './wallpapers-list.component';
import { OwlModule } from 'ngx-owl-carousel';


@NgModule({
  declarations: [WallpapersListComponent],
  imports: [
    CommonModule,
    OwlModule
  ]
})
export class WallpapersListModule { }
