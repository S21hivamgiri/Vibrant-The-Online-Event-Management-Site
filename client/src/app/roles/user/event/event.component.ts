import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from '../../../model/event.model';
import { ChangeDetectorRef } from '@angular/core';
import EventService from 'src/app/services/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  professional: Event[];
  timer;
  days: Number;
  hours: Number;
  minutes: Number;
  seconds: Number;
  constructor(private eventService: EventService, private router: Router, private cdref: ChangeDetectorRef) { }

  ngOnInit() {
    this.eventService.GetEvent().subscribe(res => {
      this.professional = res;
      if (this.professional.length) {
        this.professional.sort((a: Event, b: Event) => { return new Date(a.start).getTime() - new Date(b.start).getTime() });
        this.timer = setInterval(() => { this.setTime() }, 1000);
      }
    });
  }

  getdetail(id) {
    this.router.navigate(['/user/events/' + id]);
  }

  setTime() {
    // Get today's date and time
    var now = new Date().getTime();
    var countDownDate = new Date(this.professional[0].start).getTime();
    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    if (distance > 0) {
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    }
  }
}
