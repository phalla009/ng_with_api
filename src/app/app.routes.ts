import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ProductDetail } from './product-detail/product-detail';
import { Product } from './product/product';
import { Cart } from './cart/cart';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'product-detail', component: ProductDetail },
  { path: 'product', component: Product },
  { path: 'cart', component: Cart },
];
