import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstagramComponent } from './instagram.component';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [InstagramComponent],
  imports: [
    CommonModule,
    NgxImageZoomModule.forRoot(),
    RouterModule,
  ]
})
export class InstagramModule { }
