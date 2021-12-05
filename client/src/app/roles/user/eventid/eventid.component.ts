import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'src/app/model/cart.model';
import { AuthService } from 'src/app/services/auth.service';
import EventService from 'src/app/services/event.service';
import { UserService } from 'src/app/services/user.service';
import { Event } from '../../../model/event.model';

@Component({
  selector: 'app-eventid',
  templateUrl: './eventid.component.html',
  styleUrls: ['./eventid.component.css']
})
export class EventidComponent implements OnInit {
  color = 'transparent';
  event: Event;
  cart: Cart[];
  constructor(private route: ActivatedRoute, private router: Router, readonly eventService: EventService, private authService: AuthService, private userService: UserService) { }

  ngOnInit() {
    let userDetail = JSON.parse(window.localStorage.getItem("user"));
    this.userService.GetUser(userDetail.userId).subscribe((res) => {
      this.cart = res.cart;
    });
    this.route.params.subscribe(params => {
      this.eventService.GetEventbyId(params['id']).subscribe((res) => {
        this.event = res;
      });
    });
  }

  isCartDisplayed(a, b) {
    return new Date(a) < new Date() && new Date() < new Date(b)
  }

  eventInCart(id: string) {
    return this.cart.reduce((result: boolean, data: Cart) => {
      let temp = true;
      if (data.id === id) {
        temp = false;
      }
      return temp && result;
    }, true)
  }

  addToCart() {
    const cartObj: Cart = {
      id: this.event['_id'],
      price: this.event['price'],
      title: this.event['title'],
      count: 1
    }
    this.authService.GetUserDetails().subscribe((data) => {
      this.userService.AddToCart(data.userId, cartObj).subscribe((res) => {
        if (res.status === 200) {
          this.router.navigate(['/user/cart'])
        }
      });
    });
  }
}
