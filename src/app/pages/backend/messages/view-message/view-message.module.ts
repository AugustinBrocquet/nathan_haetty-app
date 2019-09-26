import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewMessageComponent } from './view-message.component';
import { NgImageSliderModule } from 'ng-image-slider';



@NgModule({
  declarations: [ViewMessageComponent],
  imports: [
    CommonModule,
    NgImageSliderModule
  ]
})
export class ViewMessageModule { }
