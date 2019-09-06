import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { FrontendComponent } from './frontend.component';



const routes: Routes = [
  {
    path: '',
    component: FrontendComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrontendRoutingModule {
}
