import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WallpapersListComponent } from './wallpapers-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [WallpapersListComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class WallpapersListModule { }
