import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../../interfaces/post.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) {
  }

  getPosts() {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt-token'));
    return this.http.get(`${environment.url_api}/api/posts`, { headers });
  }

  getPost(postId: string) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt-token'));
    return this.http.get(`${environment.url_api}/api/posts/${postId}`, { headers });
  }

  createPost(post: Post) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt-token'));

    const formData = new FormData();
    formData.append('title', post.title);
    formData.append('description', post.description);
    formData.append('picture', post.picture);

    console.log(post);


    if (post.sub_pictures) {

      for (const file of post.sub_pictures) {
        formData.append('sub_pictures', file);
      }
    } else {
      formData.append('sub_pictures', null);
    }

    return this.http.post(`${environment.url_api}/api/posts`, formData, { headers });

  }

  updatePost(post: any) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt-token'));


    const formData = new FormData();
    formData.append('postId', post._id);
    formData.append('title', post.title);
    formData.append('description', post.description);
    formData.append('picture', post.picture);

    if (post.sub_pictures) {
      for (const file of post.sub_pictures) {
        formData.append('sub_pictures', file);
      }
    } else {
      formData.append('sub_pictures', null);
    }

    return this.http.put(`${environment.url_api}/api/posts/update`, formData, { headers });
  }

  deletePost(postId: string) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt-token'));
    return this.http.delete(`${environment.url_api}/api/posts/delete/${postId}`, { headers });
  }

  deleteSubPicture(postId, filename) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt-token'));
    return this.http.put(`${environment.url_api}/api/posts/delete-subpicture`, { postId, filename }, { headers });

  }



}
