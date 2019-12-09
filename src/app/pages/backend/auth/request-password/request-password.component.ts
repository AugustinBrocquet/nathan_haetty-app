import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { NbRequestPasswordComponent, NbAuthService, NB_AUTH_OPTIONS } from '@nebular/auth';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/services/users/users.service';

@Component({
  selector: 'app-request-password',
  templateUrl: './request-password.component.html',
  styleUrls: ['./request-password.component.scss']
})
export class RequestPasswordComponent extends NbRequestPasswordComponent implements OnInit {

  redirectDelay: number = 0;
  showMessages: any = {};
  strategy: string = '';

  submitted = false;
  errors: string[] = [];
  messages: string[] = [];
  user: any = {};

  constructor(
    protected service: NbAuthService,
    @Inject(NB_AUTH_OPTIONS) protected options: {},
    protected cd: ChangeDetectorRef,
    protected router: Router,
    private readonly usersService: UsersService
  ) {
    super(service, options, cd, router);
  }

  ngOnInit() {
  }

  requestPass() {
    this.usersService.sendRequestPassword(this.user.email).subscribe((resp) => {
      console.log(resp);
    });
  }

}
