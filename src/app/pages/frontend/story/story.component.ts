import { Story } from './../../../shared/interfaces/story.interface';
import { StoryService } from './../../../shared/services/story/story.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit, AfterViewInit {

  public story = {} as Story;

  constructor(private readonly storyService: StoryService, private router:Router) { }


  ngOnInit() {
    this.storyService.getStory('5d78e9d887e629b8e15d159d').subscribe((data: any) => {
      this.story = data;
      console.log(data);
    });
  }

  ngAfterViewInit() {
    document.getElementById('nb-global-spinner').style.display = 'none';
  }

  gotoContact() {
    this.router.navigate(['/front/contact']);
  }

}
