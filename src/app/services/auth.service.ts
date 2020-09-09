import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {ServerService} from '@app/services/server.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);
  // tslint:disable-next-line:variable-name
  private _token: string;
  get token(): string {
    return this._token;
  }

  constructor(private router: Router, private server: ServerService) {
    this._token = JSON.parse(localStorage.getItem('user')).token;
  }
  login(user): Subscription {
    if (user.login !== '' && user.password !== '') {
      return this.server.request('login', '/logins', {
        login: user.login,
        password: user.password
      }).subscribe((response: any) => {
        response = response[0];
        if (response !== undefined) {
          this._token = response.token;
          const userData = {
            token: this.token,
          };
          localStorage.setItem('user', JSON.stringify(userData));
          this.router.navigate(['/home']);
        }
      });
    }
  }
  logout(): void {
    delete this._token;
  }
}
