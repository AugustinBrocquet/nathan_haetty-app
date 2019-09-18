import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Wallpaper } from '../../interfaces/wallpaper.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WallpapersService {

  constructor(private http: HttpClient) {
  }

  getWallpapers() {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt-token'));
    return this.http.get(`${environment.url_api}/wallpapers`, { headers });
  }

  getWallpaper(wallpaperId: string) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt-token'));
    return this.http.get(`${environment.url_api}/wallpapers/${wallpaperId}`, { headers });
  }

  createWallpaper(wallpaper: Wallpaper) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt-token'));
    return this.http.post(`${environment.url_api}/wallpapers$`, wallpaper, { headers });
  }

  updateWallpaper(wallpaper: Wallpaper) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt-token'));
    return this.http.post(`${environment.url_api}/wallpapers/update`, wallpaper, { headers });
  }

  deleteWallpaper(wallpaperId: string) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt-token'));
    return this.http.delete(`${environment.url_api}/wallpapers/delete/${wallpaperId}`, { headers });
  }



}
