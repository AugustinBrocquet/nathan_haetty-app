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
    return this.http.post(`${environment.url_api}/api/users/auth/check-request-password-token`, { token });
  }

  createUser(user) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt-token'));
    return this.http.post(`${environment.url_api}/api/users/create/users`, user, { headers });
  }

  sendRequestPassword(email: string) {
    return this.http.post(`${environment.url_api}/api/users/auth/request-password`, { email: email });
  }

  resetPassword(token: string, password: string, confirmPassword: string) {
    return this.http.post(`${environment.url_api}/api/users/auth/reset-password`,
      {
        token,
        password,
        confirm_password: confirmPassword
      }
    );
  }

}
