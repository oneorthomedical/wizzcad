import {Injectable} from '@angular/core';
import {ServerService} from '@app/services/server.service';
import {environment} from '@environments/environment';
import {AuthService} from '@app/services/auth.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private server: ServerService, private authService: AuthService) {
  }

  get(): Observable<any> {
    console.log(this.authService.token);
    return this.server.request('content', '', this.authService.token);
  }
}
