import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  scrollTo(id: string): void {
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth'
    });
  }

  ngOnInit() {
  }

}
