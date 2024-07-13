import { Component } from '@angular/core';
import { CakeCartService } from '../cake-cart.service';
import { Cake } from '../cake-list/cake';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  shopList: Cake[] = [];
  constructor(private cart: CakeCartService) {
    cart.shopList.subscribe((observable) => this.shopList = observable)
  }
}
