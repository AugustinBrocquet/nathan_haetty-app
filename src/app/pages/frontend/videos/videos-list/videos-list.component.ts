import { Component, OnInit, AfterViewInit } from '@angular/core';
import { VideosService } from 'src/app/shared/services/videos/videos.service';
import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.scss']
})
export class VideosListComponent implements OnInit, AfterViewInit {

  public videos: any[] = [];

  constructor(private readonly videosService: VideosService, private readonly embedService: EmbedVideoService) { }

  getEmbed(url: string) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);

    if (match && match[2].length === 11) {
        return match[2];
    } else {
        return 'error';
    }
}

  ngOnInit() {
    this.videosService.getVideos().subscribe((data: any) => {
      this.videos = data.map((elem) => {

        const embed = this.getEmbed(elem.path_youtube);

        return {
          videoId: elem._id,
          embed,
          ...elem
        };
      });
      console.log(this.videos);
    });
  }

  ngAfterViewInit() {
    document.getElementById('nb-global-spinner').style.display = 'none';
  }

}
