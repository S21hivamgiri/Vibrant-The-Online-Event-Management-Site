import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions, FullCalendarModule, FullCalendarComponent } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import EventService from 'src/app/services/event.service';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin, timeGridPlugin,
  interactionPlugin
]);
@Component({
  selector: 'app-datetrack',
  templateUrl: './datetrack.component.html',
  styleUrls: ['./datetrack.component.css']
})
export class DatetrackComponent implements OnInit {

  @ViewChild('calendar') calendarComponent: FullCalendarComponent; // the #calendar in the template

  calendarVisible = true;
  calendarPlugins = [dayGridPlugin];
  calendarWeekends = true;
  calendarEvents: any[] = [];
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    displayEventEnd: true,
    eventClick: this.eventClick.bind(this),
    dateClick: this.dateClick.bind(this),
    eventTimeFormat: { // like '14:30:00'
      hour: '2-digit',
      minute: '2-digit',
      meridiem: true
    }
  };

  eventClick(arg) {
    this.auth.getCurentRole().subscribe((role) => {
      if (role === 'Admin') {
        this.router.navigate(['/admin/events/' + arg.event.id]);
      }
      else {
        this.router.navigate(['/user/events/' + arg.event.id]);
      }
    });
  }

  dateClick(arg) {
    this.auth.getCurentRole().subscribe((role) => {
      if (role === 'Admin') {
        this.router.navigate(['/admin/addevent'], { queryParams: { startTime: arg['dateStr'] } });
      }
    });
  }

  constructor(private eventService: EventService, private auth: AuthService, private router: Router) { }
  eventClasses = ['calendar-event-green', 'calendar-event-red', 'calendar-event-yellow', 'calendar-event-blue']
  events: any[];

  ngOnInit() {
    this.eventService.Gettrack().subscribe(res => {
      for (let i = 0; i < res.length; i++) {
        this.calendarEvents.push({
          className: this.eventClasses[0],
          title: res[i].title,
          start: new Date(res[i].start),
          end: new Date(res[i].end),
          id: res[i]._id
        });
      }
      this.calendarOptions.events = this.calendarEvents;
    });
  }
}
