import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { PostsService } from 'src/app/shared/services/posts/posts.service';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import * as BalloonEditor from '@ckeditor/ckeditor5-build-balloon';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  public images: any = [];
  public post = {} as any;
  public baseUrl = environment.url_img;
  public Editor = BalloonEditor;
  public editorConfig = {
  };
  private isLongPressed = false;

  constructor(
    private spinner: NgxSpinnerService,
    private postsService: PostsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {

    this.postsService.getPost(this.route.snapshot.paramMap.get('postId')).subscribe((data: any) => {
      this.post = data;
      this.post.sub_pictures.forEach(item => {
        this.images.push(item);
      });

    });

  }

  confirmDeleteSubPicrture(filename) {
    if (window.confirm('Voulez-vous vraiment supprimer cette photo ?')) {
      this.postsService.deleteSubPicture(this.post._id, filename).subscribe((response) => {
        this.images = this.images.filter((elem) => {
          return elem !== filename;
        });
        alert('photo supprimée');
        window.location.reload();
      });
    }
  }

  async updatePost() {
    await this.spinner.show();
    this.postsService.updatePost(this.post).subscribe(async response => {
      await this.spinner.hide();
      alert("Collection modifée ! ");
      window.location.reload();

    }, (async (e: any) => {
      await this.spinner.hide();
      alert("Une erreur est survenue");
    }));
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
