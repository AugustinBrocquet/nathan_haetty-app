import { InstagramModule } from './instagram/instagram.module';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FrontendRoutingModule } from './frontend-routing.module';
import { NgcCookieConsentModule, NgcCookieConsentConfig } from 'ngx-cookieconsent';

// Components
import { FrontendComponent } from './frontend.component';
import { CollectionComponent } from './collection/collection.component';
import { CommonModule } from '@angular/common';
import { ViewPostComponent } from './view-post/view-post.component';
import { ViewPostModule } from './view-post/view-post.module';


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
    ViewPostModule,
  ],
  declarations: [
    FrontendComponent,
    CollectionComponent,
  ],
  providers: []
})
export class FrontendModule {
}
