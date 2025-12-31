import { Component, ChangeDetectorRef } from '@angular/core';
import { ProdcutService } from '../service/prodcut-service';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  products_list: any[] = [];
  constructor(public ProdcutService: ProdcutService, public crd: ChangeDetectorRef) {}

  async ngOnInit() {
    this.products_list = await this.ProdcutService.getProducts();
    // console.log(this.products_list);
    this.crd.detectChanges();
  }
}
