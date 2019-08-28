import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import { NbResetPasswordComponent, NB_AUTH_OPTIONS, NbAuthService } from '@nebular/auth';
import { UsersService } from 'src/app/shared/services/users/users.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent extends NbResetPasswordComponent implements OnInit {

  constructor(
    protected service: NbAuthService,
    @Inject(NB_AUTH_OPTIONS) protected options: {},
    protected cd: ChangeDetectorRef,
    protected router: Router,
    private readonly usersService: UsersService,
    private route: ActivatedRoute
  ) {
    super(service, options, cd, router);
  }

  redirectDelay: number = 0;
  showMessages: any = {};
  strategy: string = '';

  submitted = false;
  errors: string[] = [];
  messages: string[] = [];
  user: any = {};

  ngOnInit() {
    this.usersService.checkTokenResetPassword(this.route.snapshot.paramMap.get('token')).subscribe((resp: any) => {
      console.log(resp);
    }, (error) => {
      this.router.navigate(['admin/auth/invalid-token']);
    });
  }

}
