import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstagramComponent } from './instagram.component';
import { NgxImageZoomModule } from 'ngx-image-zoom';


@NgModule({
  declarations: [InstagramComponent],
  imports: [
    CommonModule,
    NgxImageZoomModule.forRoot(),
  ]
})
export class InstagramModule { }
