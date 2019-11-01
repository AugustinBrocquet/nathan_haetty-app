import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgImageSliderModule } from 'ng-image-slider';

import { ViewPostComponent } from './view-post.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ViewPostComponent],
  imports: [
    CommonModule,
    NgImageSliderModule,
    RouterModule
  ]
})
export class ViewPostModule { }
