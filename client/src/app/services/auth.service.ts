import { Injectable } from '@angular/core';
import { environment as env } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../model/user.model'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  headers: HttpHeaders;
  constructor(private client: HttpClient) {
    this.headers = new HttpHeaders({ 'content-type': 'application/json' });
  }

  SignUp(user: User): Observable<HttpResponse<any>> {
    return this.client.post<User>(env.apiAddress + '/signup', JSON.stringify(user), { headers: this.headers, observe: 'response' });
  }

  Login(user: User): Observable<HttpResponse<any>> {
    return this.client.post<User>(env.apiAddress + '/login', JSON.stringify(user), { headers: this.headers, observe: 'response' });
  }

  IsLogin(): Observable<Boolean> {
    const data = sessionStorage.getItem('user');
    if (data !== undefined && data !== null) {
      return of(true)
    }
    return of(false);
  }

  getCurentRole(): Observable<String> {
    return of(sessionStorage.getItem('role'))
  }

  setCurentRole(data) {
    sessionStorage.setItem('role', data);
  }

  IsRemembered(): Observable<Boolean> {
    const data = localStorage.getItem('user');
    if (data !== undefined && data !== null) {
      return of(true)
    }
    return of(false);
  }

  Logout() {
    sessionStorage.removeItem('user');
  }

  GetUserDetails(): Observable<User> {
    const data = localStorage.getItem('user');
    if (data !== undefined && data !== null) {
      const user: User = JSON.parse(data);
      return of(user);
    }
    else {
      const data = sessionStorage.getItem('user');
      if (data !== undefined && data !== null) {
        const user: User = JSON.parse(data);
        return of(user)
      }
    }
    return of(new User);
  }
}
