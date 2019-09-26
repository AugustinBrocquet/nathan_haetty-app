import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosListComponent } from './videos-list.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { EmbedVideo } from 'ngx-embed-video';

@NgModule({
  declarations: [VideosListComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgxYoutubePlayerModule,
    EmbedVideo,
  ],
  providers: []
})
export class VideosListModule { }
