import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) {
  }

  getPosts() {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt-token'));
    return this.http.get('http://localhost:3000/api/posts', { headers });
  }

  getPost(postId: string) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt-token'));
    return this.http.get(`http://localhost:3000/api/posts/${postId}`, { headers });
  }

  createPost(post: Post) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt-token'));

    const formData = new FormData();
    formData.append('title', post.title);
    formData.append('description', post.description);
    formData.append('picture', post.picture);

    for (const file of post.sub_pictures) {
      formData.append('sub_pictures', file);
    }

    return this.http.post('http://localhost:3000/api/posts', formData, { headers });

  }

  updatePost(post: Post) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt-token'));
    return this.http.post('http://localhost:3000/api/posts/update', post, { headers });
  }

  deletePost(postId: string) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt-token'));
    return this.http.delete(`http://localhost:3000/api/posts/delete/${postId}`, { headers });
  }



}
