import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Message } from 'src/app/shared/interfaces/message';
import { MessagesService } from 'src/app/shared/services/messages/messages.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterViewInit {

  public mapsConfig = { lat: 48.862725, lng: 2.287592, zoom: 8 };

  public message = {} as Message;


  constructor(private readonly messageService: MessagesService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    document.getElementById('nb-global-spinner').style.display = 'none';
  }

  sendMessage() {
    this.messageService.createMessage(this.message);
    // .subscribe((response) => {
    // });
  }

}
