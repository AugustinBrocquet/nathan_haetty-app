import { InstagramModule } from './instagram/instagram.module';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FrontendRoutingModule } from './frontend-routing.module';
import { NgImageSliderModule } from 'ng-image-slider';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { NgcCookieConsentModule, NgcCookieConsentConfig } from 'ngx-cookieconsent';

// Components
import { FrontendComponent } from './frontend.component';
import { CommonModule } from '@angular/common';
import { ViewPostModule } from './collection/view-post/view-post.module';
import { VideosListModule } from './videos/videos-list/videos-list.module';
import { HomeVideoModule } from './home-video/home-video.module';
import { PostsListModule } from './collection/posts-list/posts-list.module';
import { MenuComponent } from 'src/app/components/frontend/menu/menu.component';
import { FooterComponent } from 'src/app/components/frontend/footer/footer.component';
import { WallpapersModule } from './wallpapers/wallpapers.module';
import { ContactModule } from './contact/contact.module';
import { StoryModule } from './story/story.module';
import { InstagramCarouselComponent } from 'src/app/components/frontend/instagram-carousel/instagram-carousel.component';

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
    ContactModule,
    WallpapersModule,
    StoryModule,
    NgImageSliderModule,
    NgxUsefulSwiperModule
  ],
  declarations: [
    FrontendComponent,
    MenuComponent,
    FooterComponent,
    InstagramCarouselComponent,
  ],
  providers: []
})
export class FrontendModule {
}
