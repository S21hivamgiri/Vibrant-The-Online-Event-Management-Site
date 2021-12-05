import { Injectable } from '@angular/core';
import { environment as env } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user.model'
import { Cart } from '../model/cart.model'
import { Purchase } from '../model/purchase.model';
import { Feedback } from '../model/feedback.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  headers: HttpHeaders;

  constructor(private client: HttpClient) {
    this.headers = new HttpHeaders({ 'content-type': 'application/json' });
  }

  GetUsers(): Observable<User[]> {
    return this.client.get<User[]>(env.apiAddress + '/user');
  }
  UpdateUser(user: User): Observable<HttpResponse<any>> {
    return this.client.put<HttpResponse<any>>(env.apiAddress + '/user/' + user, JSON.stringify(user), { headers: this.headers, observe: 'response' });
  }
  AddToCart(id: string, cart: Cart): Observable<HttpResponse<any>> {
    return this.client.put<HttpResponse<any>>(env.apiAddress + '/user/cart/' + id, JSON.stringify(cart), { headers: this.headers, observe: 'response' });
  }
  UpdateCart(id: string, cart: Cart[]): Observable<HttpResponse<any>> {
    return this.client.put<HttpResponse<any>>(env.apiAddress + '/user/update/cart/' + id, JSON.stringify(cart), { headers: this.headers, observe: 'response' });
  }
  UpdateFeedback(id: string): Observable<HttpResponse<any>> {
    return this.client.put<HttpResponse<any>>(env.apiAddress + '/user/update/feedback/' + id, JSON.stringify({}), { headers: this.headers, observe: 'response' });
  }
  PurchaseCart(id: string, purchase: Purchase): Observable<HttpResponse<any>> {
    return this.client.put<HttpResponse<any>>(env.apiAddress + '/user/purchase/' + id, JSON.stringify(purchase), { headers: this.headers, observe: 'response' });
  }
  GetUser(id: string): Observable<User> {
    return this.client.get<User>(env.apiAddress + '/user/' + id);
  }
  GetContactSearch(id: string): Observable<User> {
    return this.client.get<User>(env.apiAddress + '/user/contact/' + id);
  }
  GetNameSearch(id: string): Observable<User> {
    return this.client.get<User>(env.apiAddress + '/user/name/' + id);
  }
  DeleteUser(id: string): Observable<User[]> {
    return this.client.delete<User[]>(env.apiAddress + '/user/' + id);
  }
  AddUsers(user: User): Observable<HttpResponse<any>> {
    return this.client.post<HttpResponse<any>>(env.apiAddress + '/user', JSON.stringify(user), { headers: this.headers, observe: 'response' });
  }

}
