import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import EventService from 'src/app/services/event.service';
import { Event } from '../../../model/event.model';

@Component({
  selector: 'app-eventid',
  templateUrl: './eventid.component.html',
  styleUrls: ['./eventid.component.css']
})
export class EventidComponent implements OnInit {

  color = 'transparent';
  professional: any;
  constructor(private route: ActivatedRoute, readonly eventService: EventService, private cdref: ChangeDetectorRef) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.eventService.GetEventbyId(params['id']).subscribe((res) => {
        this.professional = res;
        this.cdref.detectChanges();
      });
    });
  }
}
