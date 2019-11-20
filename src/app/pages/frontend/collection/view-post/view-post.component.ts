import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { PostsService } from 'src/app/shared/services/posts/posts.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { NgImageSliderComponent } from 'ng-image-slider';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss']
})
export class ViewPostComponent implements OnInit, AfterViewInit {
  public images: any = [];


  public post: any;
  public baseUrl = environment.url_api;

  constructor(private lightbox: Lightbox, private readonly postsService: PostsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.postsService.getPost(this.route.snapshot.paramMap.get('postId')).subscribe((data: any) => {
      this.post = data;
      this.post.sub_pictures.forEach(item => {
        this.images.push({
          src: `${this.baseUrl}/img/${item}`,
          caption: ``,
          thumb: `${this.baseUrl}/img/${item}`
        });
      });

      // console.log(this.images);

    });
  }

  ngAfterViewInit() {
    document.getElementById('nb-global-spinner').style.display = 'none';
  }

  open(index: number): void {
    // open lightbox
    this.lightbox.open(this.images, index);
  }

  close(): void {
    // close lightbox programmatically
    this.lightbox.close();
  }



}
