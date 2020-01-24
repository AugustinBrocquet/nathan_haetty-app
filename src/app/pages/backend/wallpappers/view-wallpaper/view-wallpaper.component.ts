import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { WallpapersService } from 'src/app/shared/services/wallpapers/wallpapers.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-view-wallpaper',
  templateUrl: './view-wallpaper.component.html',
  styleUrls: ['./view-wallpaper.component.scss']
})
export class ViewWallpaperComponent implements OnInit {

  public wallpaper = {} as any;
  public baseUrl = environment.url_api;


  constructor(
    private spinner: NgxSpinnerService,
    private wallpapersService: WallpapersService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.wallpapersService.getWallpaper(this.route.snapshot.paramMap.get('wallpaperId')).subscribe((data: any) => {
      this.wallpaper = data;
      this.wallpaper.currentPicture = this.wallpaper.path_image;
      this.wallpaper.wallpaperId = this.wallpaper._id;
    });
  }

  async updateWallpaper() {
    await this.spinner.show();
    this.wallpapersService.updateWallpaper(this.wallpaper).subscribe(async response => {
      console.log(response);
      await this.spinner.hide();
      alert("Wallpaper modifée ! ");
      window.location.reload();

    }, (async (e: any) => {
      await this.spinner.hide();
      console.log(e);
      alert("Une erreur est survenue");
    }));
  }

  pictureChange(event) {
    this.wallpaper.path_image = event.target.files[0];
  }

}
