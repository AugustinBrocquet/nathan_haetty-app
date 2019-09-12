import { Story } from './../../../shared/interfaces/story.interface';
import { StoryService } from './../../../shared/services/story/story.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

  public story = {} as Story;

  constructor(private readonly storyService: StoryService) { }

  ngOnInit() {
    this.storyService.getStory('5d78e9d887e629b8e15d159d').subscribe((data: any) => {
      this.story = data;
      console.log(data);
    });
  }

}
