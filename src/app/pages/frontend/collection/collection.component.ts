import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PostsService } from 'src/app/shared/services/posts/posts.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit, AfterViewInit {

  public posts: any[] = [];

  constructor(private readonly postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getPosts().subscribe((data: any) => {
      this.posts = data.map((elem) => {
        return {
          postId: elem._id,
          ...elem
        };
      });
      console.log(this.posts);
    });
  }

  ngAfterViewInit() {
    document.getElementById('nb-global-spinner').style.display = 'none';
  }

}
