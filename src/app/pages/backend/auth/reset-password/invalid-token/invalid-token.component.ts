import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invalid-token',
  templateUrl: './invalid-token.component.html',
  styleUrls: ['./invalid-token.component.scss']
})
export class InvalidTokenComponent implements OnInit {

  public submitted: boolean = false;

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  gotoRequestPassword() {
    this.router.navigate(['admin/auth/request-password']);
  }

}
