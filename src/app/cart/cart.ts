import { Component } from '@angular/core';
import { CartService } from '../service/cart-service';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  constructor(public CartService: CartService) {}
}
