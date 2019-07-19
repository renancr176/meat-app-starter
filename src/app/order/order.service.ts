import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

import { MEAT_API } from 'app/app.api';
import { ErrorHandler } from 'app/app.error-handler';

//#region Services
import { ShoppingCartService } from 'app/restaurant-detail/shopping-cart/shopping-cart.service';
//#endregion

//#region Models
import { CartItemModel } from 'app/restaurant-detail/shopping-cart/cart-item-model';
import { OrderModel } from './order.model';
import { Observable } from 'rxjs/Observable';
//#endregion

@Injectable()
export class OrderService {

  constructor(private cartService: ShoppingCartService, 
    private http: Http) { }

  cartItems(): Array<CartItemModel>
  {
    return this.cartService.items;
  }

  clear(): void
  {
    this.cartService.clear();
  }

  increaseQty(item: CartItemModel): void
  {
    this.cartService.increaseQty(item);
  }

  decreaseQty(item: CartItemModel): void
  {
    this.cartService.decreaseQty(item);
  }

  removeItem(item: CartItemModel): void
  {
    this.cartService.removeItem(item);
  }

  total(): number
  {
    return this.cartService.total();
  }

  checkOrder(order: OrderModel): Observable<string>
  {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${MEAT_API}/orders`, 
        JSON.stringify(order), 
        new RequestOptions({headers: headers})
      )
      .map(res => res.json())
      .map(order => order.id)
      .catch(ErrorHandler.handleError);
  }

}
