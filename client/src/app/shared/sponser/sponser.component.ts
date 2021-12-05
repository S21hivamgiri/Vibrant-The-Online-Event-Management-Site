import { Component, OnInit } from '@angular/core';
import { Sponsor } from 'src/app/model/sponsor.model';
import SponsorService from '../../services/sponsor.service';

@Component({
  selector: 'app-sponser',
  templateUrl: './sponser.component.html',
  styleUrls: ['./sponser.component.css']
})
export class SponserComponent implements OnInit {
  professional: Sponsor[];
  constructor(private sponsorService: SponsorService) { }


  ngOnInit() {
    this.sponsorService.GetSponsor().subscribe(res => {
      this.professional = res;
    });
  }
}
