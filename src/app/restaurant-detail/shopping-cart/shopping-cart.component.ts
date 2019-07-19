import { Component, OnInit } from '@angular/core';

//#region Services
import { ShoppingCartService } from './shopping-cart.service';
//#endregion

//#region Models
import { CartItemModel } from './cart-item-model';
import { MenuItem } from '../menu-item/menu-item.model';
//#endregion

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() { }

  items(): Array<CartItemModel>
  {
    return this.shoppingCartService.items;
  }

  total(): number
  {
    return this.shoppingCartService.total();
  }

  clear(): void
  {
    this.shoppingCartService.clear();
  }

  removeItem(item: CartItemModel): void
  {
    this.shoppingCartService.removeItem(item);
  }

  addItem(item: MenuItem): void
  {
    this.shoppingCartService.addItem(item);
  }
}
