import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { FrontendComponent } from './frontend.component';
import { InstagramComponent } from './instagram/instagram.component';
import { ViewPostComponent } from './view-post/view-post.component';



const routes: Routes = [
  {
    path: '',
    component: FrontendComponent,
  },
  {
    path: 'post/:postId',
    component: ViewPostComponent,
  },
  {
    path: 'instagram',
    component: InstagramComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrontendRoutingModule {
}
