import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers() {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt-token'));
    return this.http.get(`${environment.url_api}/api/users`, { headers });
  }

  checkTokenResetPassword(token: string) {
    console.log(token);
    return this.http.post(`${environment.url_api}/api/users/auth/check-request-password-token`, { token });
  }

}
