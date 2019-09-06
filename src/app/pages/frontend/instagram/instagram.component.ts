import { Component, OnInit, AfterViewInit } from '@angular/core';
import { InstagramService } from 'src/app/shared/services/instagram/instagram.service';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.scss']
})
export class InstagramComponent implements OnInit, AfterViewInit {

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

  constructor(private readonly instagramService: InstagramService) { }

  ngOnInit() {
    this.instagramService.getInstagramFeed().subscribe((response: any) => {

      response.data.forEach(item => {
        this.images.push(item.images);
      });

      console.log(this.images);

    });
  }

  ngAfterViewInit() {
    document.getElementById('nb-global-spinner').style.display = 'none';
  }

}
