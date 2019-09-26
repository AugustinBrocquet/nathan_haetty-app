import { NgModule } from '@angular/core';
import { NbMenuModule, NbCardModule, NbTreeGridModule, NbIconModule, NbInputModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { BackendComponent } from './backend.component';
import { BackendRoutingModule } from './backend-routing.module';
import { UsersListModule } from './users/users-list/users-list.module';
import { ViewUserModule } from './users/view-user/view-user.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MessagesListModule } from './messages/messages-list/messages-list.module';
import { PostsListModule } from './posts/posts-list/posts-list.module';
import { WallpapersListModule } from './wallpappers/wallpapers-list/wallpapers-list.module';
import { CommonModule } from '@angular/common';
import { VideosListModule } from './videos/videos-list/videos-list.module';
import { StoryModule } from './story/story.module';
import { ViewMessageModule } from './messages/view-message/view-message.module';


@NgModule({
  imports: [
    CommonModule,
    BackendRoutingModule,
    ThemeModule,
    NbMenuModule,
    UsersListModule,
    MessagesListModule,
    PostsListModule,
    WallpapersListModule,
    VideosListModule,
    StoryModule,
    ViewMessageModule,
    ViewUserModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    BackendComponent,
  ],
})
export class BackendModule {
}
