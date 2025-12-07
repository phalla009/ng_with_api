import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Home } from './home/home';
import { Footer } from "./footer/footer";
import { Navbar } from "./navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, Home, Footer, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {

}
