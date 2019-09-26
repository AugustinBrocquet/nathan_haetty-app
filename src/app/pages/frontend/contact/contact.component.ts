import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Message } from 'src/app/shared/interfaces/message';
import { MessagesService } from 'src/app/shared/services/messages/messages.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterViewInit {

  public mapsConfig = { lat: 48.862725, lng: 2.287592, zoom: 8 };

  // public message = {} as Message;

  public contactForm: FormGroup;

  public message = {} as any;


  constructor(private readonly messageService: MessagesService) {
    this.contactForm = this.createFormGroupContact();
    this.message.pictures = [];
  }

  ngOnInit() {
  }

  revert() {
    this.contactForm.reset();
  }

  onPicturesChange(event: any) {
    this.message.pictures = [];

    if (event.target.files.length > 0) {
      Array.from(event.target.files).forEach(file => {
        this.message.pictures.push(file);
      });

    }
    console.log(this.message);
  }


  onVideosChange(event: any) {
    this.message.videos = [];

    if (event.target.files.length > 0) {
      Array.from(event.target.files).forEach(file => {
        this.message.videos.push(file);
      });

    }
    console.log(this.message);
  }

  createFormGroupContact() {
    return new FormGroup({
      fullname: new FormControl('', []),
      email: new FormControl('', []),
      phone: new FormControl('', []),
      content: new FormControl('', []),
      pictures: new FormControl('', []),
      // videos: new FormControl('', []),
    });
  }

  onSubmit() {
    this.message.fullname = this.contactForm.get('fullname');
    this.message.email = this.contactForm.get('email');
    this.message.phone = this.contactForm.get('phone');
    this.message.content = this.contactForm.get('content');

    this.messageService.createMessage(this.message).subscribe((response) => {
      console.log(response);
      alert('Message Envoyé !');
    });

    console.log(this.message);

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
