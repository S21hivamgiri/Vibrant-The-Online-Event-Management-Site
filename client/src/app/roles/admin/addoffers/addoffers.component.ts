import { Component, OnInit } from '@angular/core';
import { OffersService } from 'src/app/services/offers.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Offer } from 'src/app/model/offer.model';

@Component({
  selector: 'app-addoffers',
  templateUrl: './addoffers.component.html',
  styleUrls: ['./addoffers.component.css']
})
export class AddoffersComponent implements OnInit {

  user: any;
  constructor(private speakerService: OffersService, private router: Router) {
    this.user = new Offer();
  }

  SaveData(form: NgForm) {
    if (form.valid) {
      this.speakerService.AddOffer(this.user).subscribe(res => {
        if (res.status === 201) {
          this.router.navigate(["/admin/offer"]);
        }
      });
    }

  }
  ngOnInit() {
  }

}
