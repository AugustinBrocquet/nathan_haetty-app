import { InstagramModule } from './instagram/instagram.module';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FrontendRoutingModule } from './frontend-routing.module';
import { NgcCookieConsentModule, NgcCookieConsentConfig } from 'ngx-cookieconsent';
import { AgmCoreModule } from '@agm/core';

// Components
import { FrontendComponent } from './frontend.component';
import { CommonModule } from '@angular/common';
import { ViewPostModule } from './collection/view-post/view-post.module';
import { VideosListModule } from './videos/videos-list/videos-list.module';
import { ContactComponent } from './contact/contact.component';
import { StoryComponent } from './story/story.component';
import { environment } from 'src/environments/environment';
import { HomeVideoModule } from './home-video/home-video.module';
import { PostsListModule } from './collection/posts-list/posts-list.module';
import { MenuComponent } from 'src/app/components/frontend/menu/menu.component';
import { FooterComponent } from 'src/app/components/frontend/footer/footer.component';
import { WallpapersModule } from './wallpapers/wallpapers.module';

// Services


const cookieConfig: NgcCookieConsentConfig = {
  cookie: {
    domain: 'localhost' // or 'your.domain.com' // it is mandatory to set a domain, for cookies to work properly (see https://goo.gl/S2Hy2A)
  },
  palette: {
    popup: {
      background: '#000'
    },
    button: {
      background: '#f1d600'
    }
  },
  theme: 'edgeless',
  type: 'opt-out'
};


@NgModule({
  imports: [
    CommonModule,
    FrontendRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgcCookieConsentModule.forRoot(cookieConfig),
    InstagramModule,
    PostsListModule,
    ViewPostModule,
    VideosListModule,
    HomeVideoModule,
    WallpapersModule,
    AgmCoreModule.forRoot({
      apiKey: environment.google.maps_api_key,
      libraries: ['geometry']
    }),
  ],
  declarations: [
    FrontendComponent,
    ContactComponent,
    StoryComponent,
    MenuComponent,
    FooterComponent,
  ],
  providers: []
})
export class FrontendModule {
}
