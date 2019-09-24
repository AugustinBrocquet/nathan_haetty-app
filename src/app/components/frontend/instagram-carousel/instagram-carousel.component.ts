import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { InstagramService } from 'src/app/shared/services/instagram/instagram.service';
import { NgImageSliderComponent } from 'ng-image-slider';
@Component({
  selector: 'app-instagram-carousel',
  templateUrl: './instagram-carousel.component.html',
  styleUrls: ['./instagram-carousel.component.scss']
})
export class InstagramCarouselComponent implements OnInit, AfterViewInit {
  @ViewChild('nav', { static: false }) slider: NgImageSliderComponent;
  public images: Array<object> = [];

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

      console.log(this.images);

    });
  }

  goToInstagramPost(event: any) {
    console.log(event);
    
    console.log(this.slider);
  }

  ngAfterViewInit() {
    document.getElementById('nb-global-spinner').style.display = 'none';
  }

}
