import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstagramComponent } from './instagram.component';
import { OwlModule } from 'ngx-owl-carousel';


@NgModule({
  declarations: [InstagramComponent],
  imports: [
    CommonModule,
    OwlModule,
  ]
})
export class InstagramModule { }
