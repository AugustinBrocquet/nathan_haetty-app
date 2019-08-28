import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {

  public starRate = 2;
  public heartRate = 4;
  public radioGroupValue = 'This is value 2';

  constructor(protected location: Location) { }

  ngOnInit() {
  }

  back() {
    this.location.back();
    return false;
  }

}
