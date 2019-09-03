import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WallpapersListComponent } from './wallpapers-list.component';
import { OwlModule } from 'ngx-owl-carousel';
import { NgxImageZoomModule } from 'ngx-image-zoom';



@NgModule({
  declarations: [WallpapersListComponent],
  imports: [
    CommonModule,
    OwlModule,
    NgxImageZoomModule
  ]
})
export class WallpapersListModule { }
