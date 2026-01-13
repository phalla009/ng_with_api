import { Component, ChangeDetectorRef } from '@angular/core';
import { ProdcutService } from '../service/prodcut-service';
import { RouterLink, RouterModule } from '@angular/router';
import { CartService } from '../service/cart-service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  products_list: any[] = [

  ];
  constructor(
    public ProdcutService: ProdcutService,
    public crd: ChangeDetectorRef,
    public CartService: CartService
  ) {}

  async ngOnInit() {
    this.products_list = await this.ProdcutService.getProducts();
    this.crd.detectChanges();
  }
  addTocart(product: any): void {
    this.CartService.setCart(product);
    
  }
}
