import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import { NbLoginComponent, NbAuthSocialLink, NbAuthService, NB_AUTH_OPTIONS } from '@nebular/auth';
import { AuthenticationService } from 'src/app/shared/services/authentication/authentication.service';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/shared/interfaces/login-user.interface';
import * as moment from 'moment';
import { NgxSpinnerService } from 'ngx-spinner';

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
    private readonly authenticationService: AuthenticationService,
    private spinner: NgxSpinnerService,
  ) {
    super(service, options, cd, router);
  }

  async signIn() {

    await this.spinner.show();

    this.authenticationService.signIn(this.user).subscribe(async (response: any) => {
      // console.log(response);
      await this.spinner.hide();
      localStorage.setItem('jwt-token', response.data.token);
      const expiresAt = moment().add(response.data.expiresIn, 'second');
      localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
      this.router.navigate(['/admin/users']);
     //  console.log('redirection');
    }, async (error) => {
      await this.spinner.hide();
      alert('Une erreur est survenue !');
      console.log(error);
    });
  }


  ngOnInit() {
  }

}
