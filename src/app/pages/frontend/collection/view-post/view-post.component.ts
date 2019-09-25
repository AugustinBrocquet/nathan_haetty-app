import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { PostsService } from 'src/app/shared/services/posts/posts.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { NgImageSliderComponent } from 'ng-image-slider';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss']
})
export class ViewPostComponent implements OnInit, AfterViewInit {
  @ViewChild('nav', { static: false }) slider: NgImageSliderComponent;
  public images: Array<object> = [];


  public post: any;
  public baseUrl = environment.url_api;

  constructor(private readonly postsService: PostsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.postsService.getPost(this.route.snapshot.paramMap.get('postId')).subscribe((data: any) => {
      this.post = data;
      this.post.sub_pictures.forEach(item => {
        const img = {} as any;
        img.image = item;
        img.thumbImage = `${this.baseUrl}/img/${item}`;
        this.images.push(img);
      });

      console.log(this.images);
      console.log(data);
    });
  }

  ngAfterViewInit() {
    document.getElementById('nb-global-spinner').style.display = 'none';
  }



}
