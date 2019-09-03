import { MockDataModule } from './../../../../@core/mock/mock-data.module';
import { Component, OnInit } from '@angular/core';
import { WallpapersService } from 'src/app/shared/services/wallpapers/wallpapers.service';

@Component({
  selector: 'app-wallpapers-list',
  templateUrl: './wallpapers-list.component.html',
  styleUrls: ['./wallpapers-list.component.scss']
})
export class WallpapersListComponent implements OnInit {

  public carouselOptions = {
    margin: 25,
    nav: true,
    navText: ['<div class="nav-btn prev-slide"></div>', '<div class="nav-btn next-slide"></div>'],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: true
      },
      1000: {
        items: 2,
        nav: true,
        loop: false
      },
      1500: {
        items: 3,
        nav: true,
        loop: false
      }
    }
  };

  public images: any[] = [];

  constructor(private readonly wallpapersService: WallpapersService) { }

  ngOnInit() {

    this.wallpapersService.getInstagramFeed().subscribe((response: any) => {

      response.data.forEach(item => {
        this.images.push(item.images);
      });

      console.log(this.images);

    });

  }

}
