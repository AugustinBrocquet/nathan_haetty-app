import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoryComponent } from './story.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [StoryComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class StoryModule { }
