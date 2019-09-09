import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public mapsConfig = { lat: 48.862725, lng: 2.287592, zoom: 8 };


  constructor() { }

  ngOnInit() {
  }

}
