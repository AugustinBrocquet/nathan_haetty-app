import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginUser } from '../../interfaces/login-user.interface';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private router: Router) { }

  signIn(user: LoginUser) {

    return this.http.post(`${environment.url_api}/auth`, user);

  }

  loggedIn() {
    // return !!localStorage.getItem('jwt-token');
    return moment().isBefore(this.getExpiration());
  }

  getToken() {
    return localStorage.getItem('jwt-token');
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

  signOut() {
    localStorage.removeItem('jwt-token');
    localStorage.removeItem('expires_at');
    this.router.navigate(['admin/auth/login']);
  }

}
