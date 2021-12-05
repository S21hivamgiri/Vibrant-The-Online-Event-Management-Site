import { Component, OnInit } from '@angular/core';
import { Speaker } from 'src/app/model/speaker.model';
import { Router } from '@angular/router';
import SponsorService from 'src/app/services/sponsor.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addspeaker',
  templateUrl: './addspeaker.component.html',
  styleUrls: ['./addspeaker.component.css']
})
export class AddspeakerComponent implements OnInit {
  user: any;
  constructor(private speakerService: SponsorService, private router: Router) {
    this.user = new Speaker();
  }
  submitType = '';
  SaveData(form: NgForm) {
    if (form.valid) {
      this.speakerService.AddSpeaker(this.user).subscribe(res => {
        if (res.status === 201) {
          if (this.submitType === 'view') {
            this.router.navigate(["/admin/speaker"]);
          }
          else if (this.submitType === 'next') {
            window.location.reload();
          }
        }
      });
    }

  }
  ngOnInit() {
  }

}
