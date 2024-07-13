import { Component, OnInit } from '@angular/core';
import { Cake } from './cake';
import { CakeCartService } from '../cake-cart.service';
import { CakeDataService } from '../cake-data.service';

@Component({
  selector: 'app-cake-list',
  templateUrl: './cake-list.component.html',
  styleUrl: './cake-list.component.scss'
})
export class CakeListComponent implements OnInit {

  cakes: Cake[] = [];

  constructor(
    private cart: CakeCartService,
    private cakeDataService: CakeDataService
  ) {
  }

  ngOnInit(): void {
    this.cakeDataService.getAll()
      .subscribe(data => this.cakes = data)
  }

  addTocart(cake: Cake): void {
    this.cart.addTocart(cake);
    cake.stock -= cake.porcion;
    cake.porcion = 0;
  }

  maxReached(m: String) {
    alert(m);
  }

}
