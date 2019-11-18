import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PostsService } from 'src/app/shared/services/posts/posts.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent implements OnInit, AfterViewInit {

  public posts: any[] = [];
  public baseUrl = environment.url_api;

  constructor(private readonly postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getPosts().subscribe((data: any) => {
      this.posts = data.map((elem) => {
        return {
          postId: elem._id,
          ...elem
        };
      });
     // console.log(this.posts);
    });
  }

  ngAfterViewInit() {
    document.getElementById('nb-global-spinner').style.display = 'none';
  }

}
