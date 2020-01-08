import { PostsService } from "./../../../../shared/services/posts/posts.service";
import { Component, OnInit } from "@angular/core";
import { Post } from "src/app/shared/interfaces/post.interface";
import { Router } from "@angular/router";
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: "app-posts-list",
  templateUrl: "./posts-list.component.html",
  styleUrls: ["./posts-list.component.scss"]
})
export class PostsListComponent implements OnInit {
  settings = {
    actions: {
      add: false,
      edit: false,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true
    },
    columns: {
      postId: {
        title: "ID",
        type: "number"
      },
      title: {
        title: "Titre",
        type: "string"
      },
      picture: {
        title: "Photo",
        type: "string"
      }
    }
  };

  public posts: any[] = [];
  public post = {} as Post;

  constructor(
    private spinner: NgxSpinnerService,
    private readonly postsService: PostsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.postsService.getPosts().subscribe((data: any) => {
      this.posts = data.map(elem => {
        return {
          postId: elem._id,
          ...elem
        };
      });
    });
  }
  async createPost() {
    await this.spinner.show();
    this.postsService.createPost(this.post).subscribe(async (response) => {
      await this.spinner.hide();
      alert("Collection crée ! ");
    }, async (e: any) => {
      await this.spinner.hide();
      alert("Une erreur est survenue");
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
  onDeleteConfirm(event): void {
    if (window.confirm("Voulez vous vraiment procéder à la suppression ?")) {
      event.confirm.resolve();
      this.postsService.deletePost(event.data.postId).subscribe(() => {
        alert("Suppression réussie !");
      });
    } else {
      event.confirm.reject();
    }
  }

  goToEdit(event) {
    this.router.navigateByUrl(`admin/post/${event.data.postId}`);
  }
}
