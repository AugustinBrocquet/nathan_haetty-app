import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsListComponent } from './posts-list.component';
import { NbProgressBarModule } from '@nebular/theme';



@NgModule({
  declarations: [PostsListComponent],
  imports: [
    CommonModule,
    FormsModule,
    NbProgressBarModule,
  ],
  exports: []
})
export class PostsListModule { }
