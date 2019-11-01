import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WallpapersComponent } from './wallpapers.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [WallpapersComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class WallpapersModule { }
