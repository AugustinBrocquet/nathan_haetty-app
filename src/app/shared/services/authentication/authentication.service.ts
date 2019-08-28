import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginUser } from '../../interfaces/login-user.interface';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private router: Router) { }

  signIn(user: LoginUser) {

    return this.http.post('http://localhost:3000/api/auth', user);

  }

  loggedIn() {
    return !!localStorage.getItem('jwt-token');
  }

  getToken() {
    return localStorage.getItem('jwt-token');
  }

  signOut() {
    localStorage.removeItem('jwt-token');
    this.router.navigate(['admin/auth/login']);
  }

}
