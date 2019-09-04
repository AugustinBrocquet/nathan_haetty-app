import { PostsService } from './../../../../shared/services/posts/posts.service';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/interfaces/post.interface';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  public post = {} as Post;

  constructor(private readonly postsService: PostsService) { }

  ngOnInit() {
  }

  createPost() {
    this.postsService.createPost(this.post).subscribe((response) => {
      console.log(response);
    });
  }

  pictureChange(event) {
    this.post.picture = event.target.files[0];
    console.log(this.post);
  }

  subPicturesChange(event) {

    this.post.sub_pictures = [];

    if (event.target.files.length > 0) {
      Array.from(event.target.files).forEach(file => {
        this.post.sub_pictures.push(file);
      });

    }
    console.log(this.post);
  }

}
