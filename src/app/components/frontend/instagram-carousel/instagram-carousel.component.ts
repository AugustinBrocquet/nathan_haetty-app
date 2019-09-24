import { Component, OnInit, AfterViewInit } from '@angular/core';
import { InstagramService } from 'src/app/shared/services/instagram/instagram.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-instagram-carousel',
  templateUrl: './instagram-carousel.component.html',
  styleUrls: ['./instagram-carousel.component.scss']
})
export class InstagramCarouselComponent implements OnInit, AfterViewInit {

  public images: Array<object> = [];
  public images2: Array<string> = [];
  // public imageObject: Array<object> = [{
  //   thumbImage: 'https://firebase.google.com/downloads/brand-guidelines/PNG/logo-vertical.png' // Youtube url
  // }];

  public config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  };

  constructor(private readonly instagramService: InstagramService) { }

  ngOnInit() {
    this.instagramService.getInstagramFeed().subscribe((response: any) => {

      response.data.forEach(item => {
        const img = {} as any;
        img.image = item.images.standard_resolution.url;
        img.thumbImage = item.images.thumbnail.url;
        img.title = item.caption.text;
        this.images.push(img);
      });

      response.data.forEach(item => {
        this.images2.push(item.images);
      });

      console.log(this.images);
      // console.log(this.imageObject);

    });
  }

  ngAfterViewInit() {
    document.getElementById('nb-global-spinner').style.display = 'none';
  }

}
