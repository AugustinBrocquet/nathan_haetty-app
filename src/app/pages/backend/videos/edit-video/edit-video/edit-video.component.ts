import { Component, OnInit } from '@angular/core';
import { VideosService } from 'src/app/shared/services/videos/videos.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-video',
  templateUrl: './edit-video.component.html',
  styleUrls: ['./edit-video.component.scss']
})
export class EditVideoComponent implements OnInit {

  public video = {} as any;

  constructor(
    private spinner: NgxSpinnerService,
    private videosService: VideosService,
    private route: ActivatedRoute,

  ) { }

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
    this.videosService.getVideo(this.route.snapshot.paramMap.get('videoId')).subscribe((data: any) => {
      this.video = data;
      this.video.embed = this.getEmbed(this.video.path_youtube);
      console.log(this.video);
    });
  }

  async updateVideo() {
    await this.spinner.show();
    this.videosService.updateVideo(this.video).subscribe(async response => {
      await this.spinner.hide();
      alert("Video modifée ! ");
      window.location.reload();

    }, (async (e: any) => {
      await this.spinner.hide();
      alert("Une erreur est survenue");
    }));
  }

}
