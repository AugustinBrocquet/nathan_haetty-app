import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/shared/services/posts/posts.service';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import * as BalloonEditor from '@ckeditor/ckeditor5-build-balloon';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {

  public images: any = [];
  public post = {} as any;
  public baseUrl = environment.url_api;
   public Editor = BalloonEditor;
   public editorConfig = {
   };
  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    ) { }

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

  updatePost() {
    this.postsService.createPost(this.post).subscribe(response => {
      alert("Collection modifée ! ");
    });
  }
  pictureChange(event) {
    this.post.picture = event.target.files[0];
  }
  subPicturesChange(event) {
    this.post.sub_pictures = [];
    if (event.target.files.length > 0) {
      Array.from(event.target.files).forEach(file => {
        this.post.sub_pictures.push(file);
      });
    }
  }

}
