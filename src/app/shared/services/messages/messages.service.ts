import { Message } from 'src/app/shared/interfaces/message';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http: HttpClient) { }

  getMessages() {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt-token'));
    return this.http.get(`${environment.url_api}/api/messages`, { headers });
  }

  getMessage(messageId: string) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt-token'));
    return this.http.get(`${environment.url_api}/api/messages/${messageId}`, { headers });
  }

  createMessage(message: any) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt-token'));

    const formData = new FormData();
    formData.append('fullname', message.fullname);
    formData.append('email', message.email);
    formData.append('phone', message.phone);
    formData.append('content', message.content);

    for (const file of message.pictures) {
      formData.append('pictures', file);
    }

    /*for (const file of message.videos) {
      formData.append('videos', file);
    } */


    return this.http.post(`${environment.url_api}/api/messages`, formData, { headers });

  }

  updateMessage(message: Message) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt-token'));
    return this.http.post(`${environment.url_api}/api/messages/update`, message, { headers });
  }

  deletePost(messageId: string) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt-token'));
    return this.http.delete(`${environment.url_api}/api/messages/delete/${messageId}`, { headers });
  }

}
