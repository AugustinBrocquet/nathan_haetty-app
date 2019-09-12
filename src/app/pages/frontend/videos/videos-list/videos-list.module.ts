import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosListComponent } from './videos-list.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';


@NgModule({
  declarations: [VideosListComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgxYoutubePlayerModule,
  ]
})
export class VideosListModule { }
