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
  private authenticated: boolean;

  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  get token(): string {
    return this._token;
  }

  constructor(private router: Router, private server: ServerService) {
    /*   console.log('Auth Service');
       const userData = localStorage.getItem('user');
       if (userData) {
         console.log('Logged in from memory');
         this.authenticated = false;
         const user = JSON.parse(userData);
         this.token = user.token;
         this.server.setLoggedIn(true, this.token);
         this.loggedIn.next(true);
       }*/
  }

  login(user): Subscription {
    if (user.login !== '' && user.password !== '') {
      return this.server.request('login', '/logins', {
        login: user.login,
        password: user.password
      }).subscribe((response: any) => {
        response = response[0];
        if (response !== undefined) {
          console.log('token exist', response);
          this.authenticated = true;
          this._token = response.token;
          this.server.setLoggedIn(true, this.token);
          this.loggedIn.next(true);
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
    this.server.setLoggedIn(false);
    delete this._token;
    this.loggedIn.next(false);
    localStorage.clear();
    this.router.navigate(['/']);
  }

  isAuth(): boolean {
    return this.authenticated;
  }
}
