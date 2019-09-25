import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgImageSliderModule } from 'ng-image-slider';

import { ViewPostComponent } from './view-post.component';



@NgModule({
  declarations: [ViewPostComponent],
  imports: [
    CommonModule,
    NgImageSliderModule
  ]
})
export class ViewPostModule { }
