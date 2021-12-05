import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import EventService from 'src/app/services/event.service';
import { Event } from '../model/event.model';
var id;
@Component({
  selector: 'app-eventid',
  templateUrl: './eventid.component.html',
  styleUrls: ['./eventid.component.css']
})
export class EventidComponent implements OnInit {
  status = '';
  color = 'transparent';
  professional: any;
  constructor(private route: ActivatedRoute, readonly eventService: EventService) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.eventService.GetEventbyId(params['id']).subscribe((res) => {
        this.professional = res;
        this.eventService.GetStatus(this.professional.cancel, this.professional.regisDate,
          this.professional.regisCloseDate, this.professional.start, this.professional.end).subscribe((data: string[]) => {
            console.log(data)
          });
      });
    });
  }
}
