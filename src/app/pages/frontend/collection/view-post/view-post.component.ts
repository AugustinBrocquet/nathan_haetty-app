import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PostsService } from 'src/app/shared/services/posts/posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss']
})
export class ViewPostComponent implements OnInit, AfterViewInit {

  public post: any;

  constructor(private readonly postsService: PostsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.postsService.getPost(this.route.snapshot.paramMap.get('postId')).subscribe((data: any) => {
      this.post = data;
      console.log(data);
    });
  }

  ngAfterViewInit() {
    document.getElementById('nb-global-spinner').style.display = 'none';
  }



}
