import { Component, OnInit } from '@angular/core';
import * as BalloonEditor from '@ckeditor/ckeditor5-build-balloon';
import { Story } from 'src/app/shared/interfaces/story.interface';
import { StoryService } from 'src/app/shared/services/story/story.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

  public Editor = BalloonEditor;
  public editorConfig = {
    placeholder: 'Type the content here!',
  };
  public story = {} as Story;

  constructor(private readonly storyService: StoryService) { }

  ngOnInit() {
    this.storyService.getStory('5d78e9d887e629b8e15d159d').subscribe((data: any) => {
      this.story = data;
      // console.log(data);
    });
  }

  updateStory() {
    this.storyService.updateStory(this.story).subscribe((response: any) => {
      // console.log(response);
      alert('Story Modifiée avec succès');
    });
  }

  pictureChange(event) {
    this.story.image = event.target.files[0];
    // console.log(this.story);
  }

}
