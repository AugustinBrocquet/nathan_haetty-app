import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewWallpaperComponent } from './view-wallpaper.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ViewWallpaperComponent],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    FormsModule,
  ]
})
export class ViewWallpaperModule { }
