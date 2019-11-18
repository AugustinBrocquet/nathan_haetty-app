import { Component, OnInit, AfterViewInit } from '@angular/core';
import { InstagramService } from 'src/app/shared/services/instagram/instagram.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.scss']
})
export class InstagramComponent implements OnInit, AfterViewInit {

  public baseUrl = environment.url_api;
  public images: any[] = [

  ];

  constructor(private readonly instagramService: InstagramService) { }

  ngOnInit() {
    this.instagramService.getInstagramFeed().subscribe((response: any) => {

      response.data.forEach(item => {
        this.images.push(item.images);
      });

      // console.log(this.images);

    });
  }

  ngAfterViewInit() {
    document.getElementById('nb-global-spinner').style.display = 'none';
  }

}
