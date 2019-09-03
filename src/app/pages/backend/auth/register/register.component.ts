import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import { NbRegisterComponent, NbAuthSocialLink, NbAuthService, NB_AUTH_OPTIONS } from '@nebular/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends NbRegisterComponent implements OnInit {

  public redirectDelay: number = 0;
  public showMessages: any = {};
  public strategy: string = '';

  public submitted = false;
  public errors: string[] = [];
  public messages: string[] = [];
  public user: any = {};
  public socialLinks: NbAuthSocialLink[] = [];

  constructor(
    protected service: NbAuthService,
    @Inject(NB_AUTH_OPTIONS) protected options: {},
    protected cd: ChangeDetectorRef,
    protected router: Router,
  ) {
    super(service, options, cd, router);
  }

  ngOnInit() {
  }

}
