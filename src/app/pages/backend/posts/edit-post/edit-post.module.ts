import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPostComponent } from './edit-post.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [EditPostComponent],
  imports: [
    CommonModule,
    CKEditorModule,
    FormsModule,
    NgxSpinnerModule
  ]
})
export class EditPostModule { }
