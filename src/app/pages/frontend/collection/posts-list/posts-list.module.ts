import { PostsListComponent } from './posts-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [PostsListComponent],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class PostsListModule { }
