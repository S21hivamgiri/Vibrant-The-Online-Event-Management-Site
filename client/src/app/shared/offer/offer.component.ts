import { Component, OnInit } from '@angular/core';
import { environment as env } from '../../../environments/environment';

import { OffersService } from 'src/app/services/offers.service';
function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}
@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})

export class OfferComponent implements OnInit {

  professional: any[];
  constructor(private offersService: OffersService) { }

  copydata(value) {

    var textArea = document.createElement("textarea");
    textArea.value = value;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();

  }
  deleteOffer(id: string) {
    this.offersService.DeleteOffer(id).subscribe();;
  }
  ngOnInit() {
    this.offersService.GetOffer().subscribe(res => {
      this.professional = res;
    });
  }


}
