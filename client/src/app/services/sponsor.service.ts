import { Injectable } from '@angular/core';
import { environment as env } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sponsor } from '../model/sponsor.model';
import { Speaker } from '../model/speaker.model';

@Injectable({
    providedIn: 'root'
})
export default class SponsorService {
    headers: HttpHeaders;
    constructor(private client: HttpClient) {
        this.headers = new HttpHeaders({ 'content-type': 'application/json' });
    }
    GetSponsor(): Observable<Sponsor[]> {
        return this.client.get<Sponsor[]>(env.apiAddress + '/sponsor/');
    }
    GetSpeaker(): Observable<Speaker[]> {
        return this.client.get<Speaker[]>(env.apiAddress + '/speaker/');
    }
    AddSponsor(professional: Sponsor): Observable<HttpResponse<any>> {
        return this.client.post<HttpResponse<any>>(env.apiAddress + '/sponsor/add', JSON.stringify(professional), { headers: this.headers, observe: 'response' });
    }
    AddSpeaker(professional: Speaker): Observable<HttpResponse<any>> {
        return this.client.post<HttpResponse<any>>(env.apiAddress + '/speaker/add', JSON.stringify(professional), { headers: this.headers, observe: 'response' });
    }
}
