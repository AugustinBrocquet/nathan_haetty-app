import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Video } from '../../interfaces/video.interface';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  constructor(private http: HttpClient) {
  }

  getVideos() {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt-token'));
    return this.http.get('http://localhost:3000/api/videos', { headers });
  }

  getVideo(postId: string) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt-token'));
    return this.http.get(`http://localhost:3000/api/videos/${postId}`, { headers });
  }

  createVideo(video: Video) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt-token'));

    return this.http.post('http://localhost:3000/api/videos', video, { headers });

  }

  updateVideo(video: Video) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt-token'));
    return this.http.post('http://localhost:3000/api/videos/update', video, { headers });
  }

  deleteVideo(videoId: string) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt-token'));
    return this.http.delete(`http://localhost:3000/api/videos/delete/${videoId}`, { headers });
  }

}
