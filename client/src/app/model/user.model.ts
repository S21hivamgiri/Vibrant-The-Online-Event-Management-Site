import { Cart } from "./cart.model";
import { Purchase } from "./purchase.model";

export class User {
  name: string;
  userId: string;
  contact: string;
  email: string;
  terms: boolean;
  password: string;
  initials: string;
  confirmPassword: string;
  address: string;
  country: string;
  code: string;
  loginTime: string;
  otp: string;
  cart: Array<Cart>;
  isFeedBackGiven: boolean;
  roles: any;
  offer: boolean;
  purchased: Array<Purchase>;
}