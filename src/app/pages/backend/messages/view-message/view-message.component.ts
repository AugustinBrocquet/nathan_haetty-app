import { MessagesService } from './../../../../shared/services/messages/messages.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-view-message',
  templateUrl: './view-message.component.html',
  styleUrls: ['./view-message.component.scss']
})
export class ViewMessageComponent implements OnInit {
  @ViewChild('nav', { static: false }) slider: NgImageSliderComponent;
  public images: Array<object> = [];

  public message: any;
  public baseUrl = environment.url_api;

  constructor(private readonly messagesService: MessagesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.messagesService.getMessage(this.route.snapshot.paramMap.get('messageId')).subscribe((data: any) => {
      this.message = data;
      this.message.pictures.forEach(item => {
        const img = {} as any;
        img.image = item;
        img.thumbImage = `${this.baseUrl}/img/${item}`;
        this.images.push(img);
      });

      // console.log(this.images);
      // console.log(data);
    });
  }

}
