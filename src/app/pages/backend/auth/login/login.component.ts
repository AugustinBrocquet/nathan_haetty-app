import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import { NbLoginComponent, NbAuthSocialLink, NbAuthService, NB_AUTH_OPTIONS } from '@nebular/auth';
import { AuthenticationService } from 'src/app/shared/services/authentication/authentication.service';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/shared/interfaces/login-user.interface';
import * as moment from 'moment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends NbLoginComponent implements OnInit {

  public redirectDelay: number = 0;
  public showMessages: any = {};
  public strategy: string = '';

  public errors: string[] = [];
  public messages: string[] = [];
  public user = {} as LoginUser;
  public submitted: boolean = false;
  public socialLinks: NbAuthSocialLink[] = [];
  public rememberMe = false;


  constructor(
    protected service: NbAuthService,
    @Inject(NB_AUTH_OPTIONS) protected options: {},
    protected cd: ChangeDetectorRef,
    protected router: Router,
    private readonly authenticationService: AuthenticationService
  ) {
    super(service, options, cd, router);
  }

  signIn() {
    this.authenticationService.signIn(this.user).subscribe((response: any) => {
      console.log(response);
      localStorage.setItem('jwt-token', response.data.token);
      const expiresAt = moment().add(response.expiresIn, 'second');
      localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
      this.router.navigate(['/admin/users']);
      console.log('redirection');
    }, (error) => {
      console.log(error);
    });
  }


  ngOnInit() {
  }

}
