import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Home } from './home/home';
import { Footer } from './footer/footer';
import { Navbar } from './navbar/navbar';
import { Benner } from './benner/benner';
import { CartService } from './service/cart-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, FormsModule, Home, Footer, Navbar, Benner],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  constructor(public CartService: CartService){
  }
}
