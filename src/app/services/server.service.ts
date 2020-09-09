import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '@environments/environment';
import {Observable} from 'rxjs';

const baseUrl = environment.WIZZCAD_BASE_URL;

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  private loggedIn = false;
  private token: string;

  constructor(private http: HttpClient) {
  }
  request(link: string, route: string, data?: any): Observable<any> {
    if (link === 'login') {
      return this.get(route, data);
    } else if (link === 'content') {
      return this.getDataString(route, data);
    }
  }

  getHeader(): { Authorization: string } {
    return (this.loggedIn) ? {Authorization: `Bearer ${this.token}`} : undefined;
  }

  get(route: string, data?: any): Observable<any> {
    let params = new HttpParams();
    if (data !== undefined) {
      Object.getOwnPropertyNames(data).forEach(key => {
        params = params.set(key, data[key]);
      });
    }
    return this.http.get(baseUrl + route, {
      responseType: 'json',
      headers: this.getHeader(),
      params
    });
  }

  getDataString(route: string, data?: any): Observable<any> {
    return this.http.get(`${baseUrl}/${data}`, {
      responseType: 'json',
      headers: this.getHeader(),
    });
  }
}
