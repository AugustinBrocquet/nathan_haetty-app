import { Component, OnInit } from '@angular/core';
import { NbResetPasswordComponent } from '@nebular/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expired-token',
  templateUrl: './expired-token.component.html',
  styleUrls: ['./expired-token.component.scss']
})
export class ExpiredTokenComponent implements OnInit {

  public submitted: boolean = false;

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  gotoRequestPassword() {
    this.router.navigate(['admin/auth/request-password']);
  }

}
