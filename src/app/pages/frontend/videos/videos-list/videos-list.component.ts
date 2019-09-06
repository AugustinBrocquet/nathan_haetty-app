import { Component, OnInit, AfterViewInit } from '@angular/core';
import { VideosService } from 'src/app/shared/services/videos/videos.service';

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.scss']
})
export class VideosListComponent implements OnInit, AfterViewInit {

  public videos: any[] = [];

  constructor(private readonly videosService: VideosService) { }

  ngOnInit() {
    this.videosService.getVideos().subscribe((data: any) => {
      this.videos = data.map((elem) => {
        return {
          videoId: elem._id,
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
