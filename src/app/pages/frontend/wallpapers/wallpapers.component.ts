import { Component, OnInit, AfterViewInit } from '@angular/core';
import { WallpapersService } from 'src/app/shared/services/wallpapers/wallpapers.service';
import { environment } from 'src/environments/environment';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-wallpapers',
  templateUrl: './wallpapers.component.html',
  styleUrls: ['./wallpapers.component.scss']
})
export class WallpapersComponent implements OnInit, AfterViewInit {
  private albums: any = [];
  public wallpapers: any = [];
  public baseUrl = environment.url_api;
  constructor(private readonly wallpapersService: WallpapersService, private lightbox: Lightbox) { }

  ngOnInit() {
    this.wallpapersService.getWallpapers().subscribe((response: any) => {

      this.wallpapers = response;

      this.wallpapers.map((wallpaper) => {
        const album = {
          src: `${this.baseUrl}/img/${wallpaper.path_image}`,
          caption: `${this.baseUrl}/img/${wallpaper.path_image}`,
          thumb: `${this.baseUrl}/img/${wallpaper.path_image}`,
        };

        this.albums.push(album);
      });

    });
  }

  ngAfterViewInit() {
    document.getElementById('nb-global-spinner').style.display = 'none';
  }

  open(index: number): void {
    // open lightbox
    this.lightbox.open(this.albums, index);
  }

  close(): void {
    // close lightbox programmatically
    this.lightbox.close();
  }

}
