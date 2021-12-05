import { Injectable } from '@angular/core';
import { environment as env } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feedback } from '../model/feedback.model';

@Injectable({
    providedIn: 'root'
})
export default class FeedbackService {
    headers: HttpHeaders;
    constructor(private client: HttpClient) {
        this.headers = new HttpHeaders({ 'content-type': 'application/json' });
    }
    GetFeedback(): Observable<{ _id: null, avg: Number }> {
        return this.client.get<{ _id: null, avg: Number }>(env.apiAddress + '/feedback/');
    }
    AddFeedback(professional: Feedback): Observable<HttpResponse<any>> {
        return this.client.post<HttpResponse<any>>(env.apiAddress + '/feedback/add', JSON.stringify(professional), { headers: this.headers, observe: 'response' });
    }
}
