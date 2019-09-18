import { PostsListComponent } from './collection/posts-list/posts-list.component';
import { HomeVideoComponent } from './home-video/home-video.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { FrontendComponent } from './frontend.component';
import { InstagramComponent } from './instagram/instagram.component';
import { VideosListComponent } from './videos/videos-list/videos-list.component';
import { ViewPostComponent } from './collection/view-post/view-post.component';



const routes: Routes = [
  {
    path: '',
    component: HomeVideoComponent,
  },
  {
    path: 'home',
    component: FrontendComponent,
  },
  {
    path: 'posts',
    component: PostsListComponent,
  },
  {
    path: 'post/:postId',
    component: ViewPostComponent,
  },
  {
    path: 'instagram',
    component: InstagramComponent,
  },
  {
    path: 'videos',
    component: VideosListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrontendRoutingModule {
}
