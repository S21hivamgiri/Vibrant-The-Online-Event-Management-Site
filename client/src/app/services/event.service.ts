import { Injectable } from '@angular/core';
import { environment as env } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Event } from '../model/event.model';
import { Speaker } from '../model/speaker.model';
import { Dater } from '../model/date.model';
@Injectable({
    providedIn: 'root'
})
export default class EventService {
    headers: HttpHeaders;
    constructor(private client: HttpClient) {
        this.headers = new HttpHeaders({ 'content-type': 'application/json' });
    }

    GetEvent(): Observable<Event[]> {
        return this.client.get<Event[]>(env.apiAddress + '/event/');
    }

    GetEventbyId(id): Observable<Event> {
        return this.client.get<Event>(env.apiAddress + '/event/' + id);
    }

    AddEvent(event: Event): Observable<HttpResponse<any>> {
        return this.client.post<HttpResponse<any>>(env.apiAddress + '/event/add', JSON.stringify(event), { headers: this.headers, observe: 'response' });
    }

    Gettrack(): Observable<Dater[]> {
        return this.client.get<Dater[]>(env.apiAddress + '/event/track/');
    }

    GetStatus(cancel: boolean, regisDate: string, regisCloseDate: string, eventStartDate: string, eventEndDate: string): Observable<Array<string>> {
        if (cancel) return of(['Cancelled', 'danger']);
        let currentDate = new Date().getTime();
        let endDate = new Date(eventEndDate).getTime();
        if (currentDate > endDate) return of(['Completed', 'dark'])
        let startDate = new Date(eventStartDate).getTime();
        if (currentDate > startDate) return of(['Ongoing', 'success']);
        let regisEndDate = new Date(regisCloseDate).getTime();
        if (currentDate > regisEndDate) return of(['Registration Closed', 'danger'])
        let regisStartDate = new Date(regisDate).getTime();
        if (currentDate > regisStartDate) return of(['Registration Started', 'warning'])
        return of(['Posted and Tentative', 'primary']);
    }
}
