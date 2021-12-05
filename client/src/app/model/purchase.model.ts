import { Cart } from "./cart.model";

export class Purchase {
    code: string;
    time: string;
    totalPrice: number;
    finalPrice: number;
    cart: Cart[];
}