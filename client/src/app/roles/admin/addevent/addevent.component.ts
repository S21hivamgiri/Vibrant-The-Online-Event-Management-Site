import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'src/app/model/event.model';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import SponsorService from 'src/app/services/sponsor.service';
import EventService from 'src/app/services/event.service';
import { NgForm } from '@angular/forms';
import { Speaker } from 'src/app/model/speaker.model';
import { Sponsor } from 'src/app/model/sponsor.model';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.css']
})
export class AddeventComponent implements OnInit {
  dropdownSettings: IDropdownSettings;
  professional: Event;
  speakerList: Speaker[];
  sponsorList: Sponsor[];
  selectedSponsors: string[];
  selectedSpeaker: string[];

  constructor(private sponsorService: SponsorService, private route: ActivatedRoute, private fb: FormBuilder, private eventService: EventService, private router: Router) {
    this.professional = new Event;
    this.selectedSpeaker = [];
    this.selectedSponsors = [];
  }
  userlist: any;
  length: Number;

  ngOnInit() {
    this.sponsorService.GetSponsor().subscribe(res => {
      this.sponsorList = res;
    });
    this.sponsorService.GetSpeaker().subscribe(res => {
      this.speakerList = res;
    });
    this.route.queryParams.subscribe(params => {
      if (params.startTime) {
        this.professional.start = `${params.startTime}T00:00`;
      }
    });

    this.dropdownSettings = {
      singleSelection: false,
      idField: '_id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  submitType = '';
  regisNow = false;
  regisOnEventStart = false;
  setRegisTime(event) {
    event.preventDefault(0)
    this.regisNow = true;
    this.professional.regisDate = new Date().toISOString().slice(0, -8)
  }
  setRegEndValue(event) {
    if (this.regisOnEventStart)
      this.professional.regisCloseDate = event.target.value;
  }

  setRegisEndTime(event) {
    event.preventDefault(0)
    this.regisOnEventStart = true;
  }

  SaveData(form: NgForm) {
    if (form.valid && this.selectedSponsors.length && this.selectedSpeaker.length) {
      this.professional.sponsors = this.selectedSponsors;
      this.professional.speakers = this.selectedSpeaker;
      this.professional.end = new Date(this.professional.end).toISOString();
      this.professional.start = new Date(this.professional.start).toISOString();

      this.professional.cancel = false;
      if (this.regisNow === true) {
        this.professional.regisDate = new Date(this.professional.regisDate).toISOString();
      }
      else {
        this.professional.regisDate = new Date().toISOString();
      }
      if (this.regisOnEventStart === true) {
        this.professional.regisCloseDate = new Date(this.professional.start).toISOString();
      }
      else {
        this.professional.regisCloseDate = new Date().toISOString();
      }
      this.professional.postDate = new Date().toISOString();
      this.eventService.AddEvent(this.professional).subscribe(res => {
        if (res.status === 201) {
          if (this.submitType === 'view')
            this.router.navigate(["/admin/event"]);
          else if (this.submitType === 'next') {
            window.location.reload();
          }
        }
      });
    }
  }

  onSponsorSelect(item: any) {
    this.selectedSponsors.push(item);
  }

  onSponsorDeSelect(item: any) {
    this.selectedSponsors.splice(this.selectedSponsors.indexOf(item), 1);
  }

  onSponsorSelectAll(items: any[]) {
    this.selectedSponsors = [];
    items.forEach((item) => {
      this.selectedSponsors.push(item);
    });
  }

  onSponsorDeSelectAll() {
    this.selectedSponsors = [];
  }

  onSpeakerSelect(item: any) {
    this.selectedSpeaker.push(item);
  }

  onSpeakerDeSelect(item: any) {
    this.selectedSpeaker.splice(this.selectedSpeaker.indexOf(item), 1);
  }

  onSpeakerSelectAll(items: any[]) {
    items.forEach((item) => {
      this.selectedSpeaker.push(item);
    });
  }

  onSpeakerDeSelectAll() {
    this.selectedSpeaker = [];
  }
}
