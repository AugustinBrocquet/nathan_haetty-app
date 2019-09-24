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

  createMessage(message: Message) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt-token'));

     /* const formData = new FormData();
    formData.append('title', post.title);
    formData.append('description', post.description);
    formData.append('picture', post.picture);

    for (const file of post.sub_pictures) {
      formData.append('sub_pictures', file); 
    }
    */

    // return this.http.post(`${environment.url_api}/api/messages`, formData, { headers });

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
