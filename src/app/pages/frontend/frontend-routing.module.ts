import { PostsListComponent } from './collection/posts-list/posts-list.component';
import { HomeVideoComponent } from './home-video/home-video.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { FrontendComponent } from './frontend.component';
import { InstagramComponent } from './instagram/instagram.component';
import { VideosListComponent } from './videos/videos-list/videos-list.component';
import { ViewPostComponent } from './collection/view-post/view-post.component';
import { WallpapersComponent } from './wallpapers/wallpapers.component';
import { ContactComponent } from './contact/contact.component';
import { StoryComponent } from './story/story.component';
import { InstagramCarouselComponent } from 'src/app/components/frontend/instagram-carousel/instagram-carousel.component';



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
    path: 'wallpapers',
    component: WallpapersComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'story',
    component: StoryComponent,
  },
  {
    path: 'videos',
    component: VideosListComponent,
  },
  {
    path: 'instagram',
    component: InstagramCarouselComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrontendRoutingModule {
}
