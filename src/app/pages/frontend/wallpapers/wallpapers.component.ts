import { Component, OnInit, AfterViewInit } from '@angular/core';
import { WallpapersService } from 'src/app/shared/services/wallpapers/wallpapers.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-wallpapers',
  templateUrl: './wallpapers.component.html',
  styleUrls: ['./wallpapers.component.scss']
})
export class WallpapersComponent implements OnInit, AfterViewInit {

  public wallpapers: any = [];
  public baseUrl = environment.url_api;
  constructor(private readonly wallpapersService: WallpapersService) { }

  ngOnInit() {
    this.wallpapersService.getWallpapers().subscribe((response: any) => {

      this.wallpapers = response;
      console.log(this.wallpapers);

    });
  }

  ngAfterViewInit() {
    document.getElementById('nb-global-spinner').style.display = 'none';
  }

}
