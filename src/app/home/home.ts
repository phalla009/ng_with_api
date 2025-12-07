import { Component } from '@angular/core';
import { ProdcutService } from '../service/prodcut-service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(public ProdcutService: ProdcutService) {}
}
