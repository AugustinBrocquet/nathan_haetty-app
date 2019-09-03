import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Wallpaper } from '../../interfaces/wallpaper.interface';

@Injectable({
  providedIn: 'root'
})
export class WallpapersService {

  constructor(private http: HttpClient) {
  }

  getWallpapers() {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt-token'));
    return this.http.get('http://localhost:3000/api/wallpapers', { headers });
  }

  getWallpaper(wallpaperId: string) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt-token'));
    return this.http.get(`http://localhost:3000/api/wallpapers/${wallpaperId}`, { headers });
  }

  createWallpaper(wallpaper: Wallpaper) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt-token'));
    return this.http.post('http://localhost:3000/api/wallpapers', wallpaper, { headers });
  }

  updateWallpaper(wallpaper: Wallpaper) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt-token'));
    return this.http.post('http://localhost:3000/api/wallpapers/update', wallpaper, { headers });
  }

  deleteWallpaper(wallpaperId: string) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt-token'));
    return this.http.delete(`http://localhost:3000/api/wallpapers/delete/${wallpaperId}`, { headers });
  }



}
