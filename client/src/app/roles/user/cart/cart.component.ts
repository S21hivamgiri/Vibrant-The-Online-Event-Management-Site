import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/user.model';
import { OffersService } from 'src/app/services/offers.service';
import { Purchase } from 'src/app/model/purchase.model';
import { AuthService } from 'src/app/services/auth.service';
import { Cart } from 'src/app/model/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  user: User;
  userDetail: any;
  total: number = 0;
  discount: number = 0;
  offer: string = '';
  errorMessage: string = '';
  successMessage: string = '';
  finalPrice = 0;
  finalOffer = '';
  constructor(private userService: UserService, readonly router: Router, private offersService: OffersService, private authService: AuthService) {
    this.user = new User();
  }

  ngOnInit() {
    let userDetail = JSON.parse(window.localStorage.getItem("user"));
    this.Getuser(userDetail.userId);
  }

  onChange() {
    this.errorMessage = '';
    this.successMessage = '';
  }

  getOffer() {
    this.offersService.GetOfferFromName(this.offer).subscribe((data) => {
      if (data) {
        if (data.type === 'discount') {
          this.discount = (this.total * data.value) / 100;
          this.finalPrice = this.total - this.discount;
        }
        else {
          this.discount = data.value;
          this.finalPrice = this.total - this.discount;
        }
        this.finalOffer = data.code;
        this.successMessage = 'Offercode ' + this.offer + ' redeemed successfully.'
      }
      else {
        this.errorMessage = 'Unable to redeem the offercode ' + this.offer + ', Offercode might have expired.'
      }
    });
  }

  upDateCart() {
    this.calcTotal();
    this.user.cart.forEach((data: Cart, index: number) => {
      if (!data.count) {
        this.user.cart.splice(index, 1);
      }
      this.userService.UpdateCart(this.user['_id'], this.user.cart).subscribe();
    })
  }

  purchase() {
    const purchaseObj: Purchase = {
      totalPrice: this.total,
      finalPrice: this.finalPrice || this.total,
      cart: this.user.cart,
      code: this.finalOffer || '',
      time: (new Date()).toISOString()
    }
    this.userService.PurchaseCart(this.user['_id'], purchaseObj).subscribe((res) => {
      if (res.status === 200) {
        this.router.navigate(['/user/purchase'])
      }
    });
  }

  calcTotal() {
    this.total = 0;
    for (let i = 0; i < this.user.cart.length; ++i) {
      this.total += Number(this.user.cart[i].price) * Number(this.user.cart[i].count);
    }
  }

  Getuser(id) {
    this.userService.GetUser(id).subscribe((res) => {
      this.user = res;
      this.calcTotal();
    });
  }
}
