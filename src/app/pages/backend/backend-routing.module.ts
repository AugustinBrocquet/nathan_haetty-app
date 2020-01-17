import { ViewMessageComponent } from './messages/view-message/view-message.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { BackendComponent } from './backend.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { ViewUserComponent } from './users/view-user/view-user.component';
import { AuthAdminGuard } from 'src/app/shared/guards/auth/auth-admin.guard';
import { MessagesListComponent } from './messages/messages-list/messages-list.component';
import { WallpapersListComponent } from './wallpappers/wallpapers-list/wallpapers-list.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { VideosListComponent } from './videos/videos-list/videos-list.component';
import { StoryComponent } from './story/story.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';
import { EditVideoComponent } from './videos/edit-video/edit-video/edit-video.component';


const routes: Routes = [{
  path: '',
  component: BackendComponent,
  canActivate: [AuthAdminGuard],
  canActivateChild: [AuthAdminGuard],
  children: [
    {
      path: 'users',
      component: UsersListComponent,
    },
    {
      path: 'user/:userId',
      component: ViewUserComponent,
    },
    {
      path: 'messages',
      component: MessagesListComponent,
    },
    {
      path: 'message/:messageId',
      component: ViewMessageComponent,
    },
    {
      path: 'wallpapers',
      component: WallpapersListComponent,
    },
    {
      path: 'posts',
      component: PostsListComponent,
    },
    {
      path: 'post/:postId',
      component: EditPostComponent,
    },
    {
      path: 'videos',
      component: VideosListComponent,
    },
    {
      path: 'video/:videoId',
      component: EditVideoComponent,
    },
    {
      path: 'story',
      component: StoryComponent,
    },
    {
      path: '',
      redirectTo: 'users',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackendRoutingModule {
}
