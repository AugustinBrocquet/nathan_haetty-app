import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WallpapersComponent } from './wallpapers.component';
import { RouterModule } from '@angular/router';
import { LightboxModule } from 'ngx-lightbox';



@NgModule({
  declarations: [WallpapersComponent],
  imports: [
    CommonModule,
    RouterModule,
    LightboxModule
  ]
})
export class WallpapersModule { }
