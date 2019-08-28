import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers() {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt-token'));
    return this.http.get('http://localhost:3000/api/users', { headers: headers });
  }

  checkTokenResetPassword(token: string) {
    console.log(token)
    return this.http.post('http://localhost:3000/api/users/auth/check-request-password-token', { token: token });
  }

}
