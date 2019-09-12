import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-video',
  templateUrl: './home-video.component.html',
  styleUrls: ['./home-video.component.scss']
})
export class HomeVideoComponent implements OnInit, AfterViewInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoHome() {
    this.router.navigate(['/home']);
  }

  ngAfterViewInit() {
    document.getElementById('nb-global-spinner').style.display = 'none';
  }

}
