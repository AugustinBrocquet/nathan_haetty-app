
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FrontendRoutingModule } from './frontend-routing.module';
import { NgcCookieConsentModule, NgcCookieConsentConfig } from 'ngx-cookieconsent';

// Components
import { FrontendComponent } from './frontend.component';


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
    FrontendRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgcCookieConsentModule.forRoot(cookieConfig)
  ],
  declarations: [
    FrontendComponent,
  ],
  providers: []
})
export class FrontendModule {
}
