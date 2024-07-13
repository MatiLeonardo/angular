import { Injectable } from '@angular/core';
import { Cake } from './cake-list/cake';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CakeCartService {

  private _shopList: Cake[] = [];
  shopList: BehaviorSubject<Cake[]> = new BehaviorSubject(this._shopList);

  constructor() { }

  addTocart(cake: Cake) {
    let item: Cake = this._shopList.find((v1) => v1.name == cake.name)!;
    if (!item) {
      this._shopList.push({ ...cake })
    }
    else {
      item.porcion += cake.porcion;
    }
    this.shopList.next(this._shopList);
  }


}
