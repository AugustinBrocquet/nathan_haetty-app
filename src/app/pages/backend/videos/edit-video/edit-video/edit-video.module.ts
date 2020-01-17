import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditVideoComponent } from './edit-video.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [EditVideoComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxYoutubePlayerModule,
    NgxSpinnerModule
  ]
})
export class EditVideoModule { }
