import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoryComponent } from './story.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [StoryComponent],
  imports: [
    CommonModule,
    CKEditorModule,
    FormsModule,
  ]
})
export class StoryModule { }
