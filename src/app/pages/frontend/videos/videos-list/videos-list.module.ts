import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosListComponent } from './videos-list.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [VideosListComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ]
})
export class VideosListModule { }
