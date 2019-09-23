import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-wallpapers',
  templateUrl: './wallpapers.component.html',
  styleUrls: ['./wallpapers.component.scss']
})
export class WallpapersComponent implements OnInit, AfterViewInit {

  public wallpapers: any = [];

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    document.getElementById('nb-global-spinner').style.display = 'none';
  }

}
