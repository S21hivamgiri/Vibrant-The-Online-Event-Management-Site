import { Component, OnInit } from '@angular/core';
import SponsorService from 'src/app/services/sponsor.service';
import { Sponsor } from 'src/app/model/sponsor.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addsponsors',
  templateUrl: './addsponsors.component.html',
  styleUrls: ['./addsponsors.component.css']
})
export class AddsponsorsComponent implements OnInit {
  submitType = '';
  user: any;
  constructor(private speakerService: SponsorService, private router: Router) {
    this.user = new Sponsor();
  }
  SaveData(form: NgForm) {
    if (form.valid) {
      this.speakerService.AddSponsor(this.user).subscribe(res => {
        if (res.status === 201) {
          if (this.submitType === 'view') {
            this.router.navigate(["/admin/sponsor"]);
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
