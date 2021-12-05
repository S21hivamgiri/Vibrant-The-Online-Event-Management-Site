import { Injectable } from '@angular/core';
import { environment as env } from '../../environments/environment';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { Offer } from '../model/offer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OffersService {
  headers: HttpHeaders;
  constructor(private client: HttpClient) {
    this.headers = new HttpHeaders({ 'content-type': 'application/json' });
  }

  GetOffer(): Observable<Offer[]> {
    return this.client.get<Offer[]>(env.apiAddress + '/offer/');
  }
  GetOffers(id): Observable<Offer[]> {
    return this.client.get<Offer[]>(env.apiAddress + '/offer/' + id);
  }
  GetOfferFromName(name): Observable<Offer> {
    return this.client.get<Offer>(env.apiAddress + '/offer/redeem/' + name);
  }
  AddOffer(professional: Offer): Observable<HttpResponse<any>> {
    return this.client.post<HttpResponse<any>>(env.apiAddress + '/offer/add', JSON.stringify(professional), { headers: this.headers, observe: 'response' });
  }
  DeleteOffer(id) {
    console.log(env.apiAddress + '/offer/delete/' + id);
    return this.client.delete(env.apiAddress + '/offer/delete/' + id);
  }

  // AddPath(image): Observable<HttpResponse<any>> {
  //   return this.client.post<HttpResponse<any>>(env.apiAddress + '/file', JSON.stringify(image), { headers: this.headers, observe: 'response' });
  // }
  // AddFile(image): Observable<HttpResponse<any>> {
  //   return this.client.post<HttpResponse<any>>(env.apiAddress + '/file/', image);
  // }
}
