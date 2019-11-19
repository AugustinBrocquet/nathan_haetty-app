import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgImageSliderModule } from 'ng-image-slider';
import { LightboxModule } from 'ngx-lightbox';
import { ViewPostComponent } from './view-post.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ViewPostComponent],
  imports: [
    CommonModule,
    NgImageSliderModule,
    RouterModule,
    LightboxModule
  ]
})
export class ViewPostModule { }
