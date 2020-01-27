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
    return this.http.get(`${environment.url_api}/api/wallpapers`, { headers });
  }

  getWallpaper(wallpaperId: string) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt-token'));
    return this.http.get(`${environment.url_api}/api/wallpapers/${wallpaperId}`, { headers });
  }

  createWallpaper(wallpaper: Wallpaper) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt-token'));

    const formData = new FormData();
    formData.append('title', wallpaper.title);
    formData.append('path_image', wallpaper.path_image);

    return this.http.post(`${environment.url_api}/api/wallpapers`, formData, { headers });
  }

  updateWallpaper(wallpaper: any) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt-token'));

    const formData = new FormData();
    formData.append('wallpaperId', wallpaper.wallpaperId);
    formData.append('path_image', wallpaper.path_image);


    return this.http.put(`${environment.url_api}/api/wallpapers/update`, formData, { headers });
  }

  deleteWallpaper(wallpaperId: string) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt-token'));
    return this.http.delete(`${environment.url_api}/api/wallpapers/delete/${wallpaperId}`, { headers });
  }



}
