import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import SponsorService from '../../services/sponsor.service';


@Component({
  selector: 'app-viewspeaker',
  templateUrl: './viewspeaker.component.html',
  styleUrls: ['./viewspeaker.component.css']
})
export class ViewspeakerComponent implements OnInit {
  constructor(private sponsorService: SponsorService, readonly auth: AuthService) { }
  professional: any[];

  ngOnInit() {
    this.sponsorService.GetSpeaker().subscribe(res => {
      this.professional = res;
    });
  }
}
