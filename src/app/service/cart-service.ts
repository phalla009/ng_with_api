import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart_list: any[] = [];

  getCart(): any {
    return this.cart_list;
  }
  setCart(product: any) {
    this.cart_list.push(product);
  }
}
