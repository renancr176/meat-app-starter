import { Injectable } from '@angular/core';
import { CartItemModel } from './cart-item-model';
import { MenuItem } from '../menu-item/menu-item.model';

@Injectable()
export class ShoppingCartService {

  items: Array<CartItemModel> = [];

  constructor() { }

  clear(): void
  {
    this.items = [];
  }

  total(): number
  {
    let total:number = 0;
    this.items.forEach(i => total += i.value());
    return total;
  }

  addItem(item: MenuItem): void
  {
    let cartItem = this.items.find((cItem) => cItem.menuItem.id === item.id);
    if(cartItem !== undefined){
      cartItem.quantity += 1;
    }
    else
    {
      this.items.push(new CartItemModel(item));
    }
  }

  removeItem(item: CartItemModel): void
  {
    this.items.splice(this.items.indexOf(item), 1);
  }

  increaseQty(item: CartItemModel): void
  {
    this.addItem(item.menuItem);
  }

  decreaseQty(item: CartItemModel): void
  {
    let cartItem = this.items.find((cItem) => cItem.menuItem.id === item.menuItem.id);
    if (cartItem !== undefined && cartItem.quantity > 1)
    {
      cartItem.quantity -= 1;
    }
  }
}
